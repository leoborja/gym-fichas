/* Gym Builder · template compartilhado.
 * Cada página define window.GB antes de carregar este arquivo:
 *   GB = { prefix:'gb2_', fichas:FICHAS, ciclo:{nome,semana,gerada}, rules:HTML|null, altLabel:'Laércio explica' }
 * Esquema de dados: ver CLAUDE.md.
 */
(function(){
const GB = window.GB || {};
const FICHAS = GB.fichas || {};
const PREFIX = GB.prefix || 'gb2_';
const RULES = GB.rules || '';
const ALT_LABEL = GB.altLabel || 'Explicação';

/* ---------- storage ---------- */
const store = k => { try { return localStorage.getItem(PREFIX+k); } catch(e){ return null; } };
const save = (k,v) => { try { localStorage.setItem(PREFIX+k, v); } catch(e){} };
const drop = k => { try { localStorage.removeItem(PREFIX+k); } catch(e){} };
const UNITS = {kg:"kg", reps:"reps", seg:"seg", corpo:"corpo", round:"round"};

/* chave estável por nome do exercício (sobrevive a reordenação entre mesociclos) */
const slug = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const exKey = (fid, ex, part) => fid+'|'+slug(ex.name)+(part?'|'+slug(part.name):'');

/* migração única: chaves antigas por índice (ficha|idx[|pi]) → chaves por nome */
function migrate(){
  if(store('keys_v3')==='1') return;
  Object.entries(FICHAS).forEach(([fid,f])=>f.items.forEach((ex,idx)=>{
    if(ex.block) return;
    const pairs = ex.parts ? ex.parts.map((p,pi)=>[fid+'|'+idx+'|'+pi, exKey(fid,ex,p)]) : [[fid+'|'+idx, exKey(fid,ex)]];
    if(ex.approach) pairs.push([fid+'|'+idx+'|aq', exKey(fid,ex)+'|aq']);
    pairs.forEach(([oldK,newK])=>{
      for(let i=0;i<8;i++) for(const t of ['kg','done','prev']){
        const v=store(oldK+'|'+t+i); if(v!==null && store(newK+'|'+t+i)===null) save(newK+'|'+t+i, v);
      }
    });
  }));
  save('keys_v3','1');
}

/* ---------- render ---------- */
let current = 'a';
const main = document.getElementById('main'), tabsEl = document.getElementById('tabs');

function setBox(key, i, unit){
  const on = store(key+'|done'+i)==='1';
  const val = store(key+'|kg'+i) ?? '';
  const last = store(key+'|prev'+i);
  const u = UNITS[unit||'kg'];
  const noInput = unit==='corpo' || unit==='round';
  return `<div class="set ${on?'on':''}" data-key="${key}" data-i="${i}">
    <div class="s">S${i+1}</div>
    <div class="kg">${noInput ? `<span class="u">${unit==='corpo'?'peso do corpo':'round '+(i+1)}</span>` :
      `<input inputmode="decimal" placeholder="${last??'–'}" value="${val}" aria-label="Carga série ${i+1}"><span class="u">${u}</span>${last?`<span class="last">últ. ${last}</span>`:''}`}</div>
    <button class="chk" type="button" aria-pressed="${on}" aria-label="Série ${i+1} feita">${on?'✓':'○'}</button></div>`;
}
function approachBoxes(key, ex){
  const rows = Array.isArray(ex.approach) ? ex.approach : [["A1","30% × 15"],["A2","50% × 10"]];
  return rows.map(([l,r],i)=>{
    const k=key+'|aq', on=store(k+'|done'+i)==='1', val=store(k+'|kg'+i)??'', last=store(k+'|prev'+i);
    return `<div class="set aq ${on?'on':''}" data-key="${k}" data-i="${i}">
      <div class="s">${l}</div>
      <div class="kg"><input inputmode="decimal" placeholder="${last??'–'}" value="${val}" aria-label="Aquecimento ${l}"><span class="u">kg · ${r}</span></div>
      <button class="chk" type="button" aria-pressed="${on}" aria-label="${l} feita">${on?'✓':'○'}</button></div>`;
  }).join('');
}
function media(yt, name, start, label){
  const st = start ? `${Math.floor(start/60)}:${String(start%60).padStart(2,'0')}` : '';
  return `<div class="media" data-yt="${yt}" data-start="${start||0}" role="button" tabindex="0" aria-label="Ver vídeo: ${name}">
    <img src="https://i.ytimg.com/vi/${yt}/hqdefault.jpg" alt="" loading="lazy" onerror="this.remove()">
    <span class="tag">${label||'Vídeo'}${st?' · '+st:''}</span><span class="play"></span><span class="name">${name}</span></div>`;
}
function videos(ex){
  const items = ex.parts || [ex];
  const hasAlt = items.some(p=>p.lr);
  const exec = items.map(p=>p.yt?media(p.yt,p.name,0,hasAlt?'Execução':'Vídeo'):'').join('');
  if(!hasAlt) return exec;
  const alt = items.map(p=>p.lr?media(p.lr.yt,ALT_LABEL+': '+p.name,p.lr.start,ALT_LABEL):'').join('');
  return `<div class="seg vtog" role="group" aria-label="Vídeo"><button type="button" aria-pressed="true" data-v="0">Execução</button><button type="button" aria-pressed="false" data-v="1">${ALT_LABEL}</button></div>
    <div class="vpane" data-v="0">${exec}</div><div class="vpane" data-v="1" hidden>${alt}</div>`;
}
function howBlock(ex){
  return `<details class="how" ${document.body.classList.contains('study')?'open':''}><summary><span class="pl">▶</span>Como fazer<span class="chev">▾</span></summary>
    <div class="howbody">${videos(ex)}
      <ul class="cues">${(ex.cues||[]).map(c=>`<li>${c}</li>`).join('')}</ul>
      ${ex.tech?`<div class="techbox"><b>Técnica:</b> ${ex.tech}</div>`:''}
      ${ex.care?`<div class="carebox">${/^[^:]+:/.test(ex.care)?ex.care.replace(/^([^:]+):\s*/,'<b>$1:</b> '):'<b>Cuidado:</b> '+ex.care}</div>`:''}
      ${ex.why?`<p class="why">${ex.why}</p>`:''}
    </div></details>`;
}
function renderTabs(){
  tabsEl.innerHTML = Object.entries(FICHAS).map(([id,f])=>
    `<button class="tab" role="tab" data-f="${id}" aria-selected="${id===current}"><b>${id.toUpperCase()}</b><small>${f.tab}</small></button>`).join('');
  tabsEl.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{ current=t.dataset.f; save('active',current); render(); window.scrollTo({top:0}); });
}
function cycleLabel(f){
  if(GB.ciclo) return `${GB.ciclo.nome} · sem ${GB.ciclo.semana}`;
  return f.cycle || '';
}
function render(){
  const f = FICHAS[current];
  renderTabs();
  const items = f.items.map(ex=>{
    if(ex.block) return `<div class="block"><b>◆</b> ${ex.block}</div>`;
    const key = exKey(current, ex);
    const head = `<div class="exhead">
      <div class="rail ${ex.warm?'warm':''}">${ex.warm?'AQ':ex.n}</div>
      <div class="title"><h2>${ex.name}</h2><div class="sub">${(ex.tags||[]).map(t=>`<span class="chip">${t}</span>`).join('')}${ex.tech?`<span class="chip tech">${ex.tech}</span>`:''}${ex.care?`<span class="chip care">${ex.care}</span>`:''}</div></div>
      <div class="rx"><b>${ex.sets} × ${ex.reps}</b><small>${ex.rest?`descanso <span>${ex.rest}s</span>`:'sem descanso'}</small></div>
    </div>`;
    const body = ex.parts
      ? ex.parts.map(p=>`<div class="row"><div class="l">${p.l}</div><div class="n">${p.name}<small>${p.sub||''}</small></div></div>
          <div class="sets">${Array.from({length:ex.sets},(_,i)=>setBox(exKey(current,ex,p),i,p.u)).join('')}</div>`).join('')
      : `<div class="sets">${ex.approach?approachBoxes(key,ex):''}${Array.from({length:ex.sets},(_,i)=>setBox(key,i,ex.u)).join('')}</div>`;
    return `<article class="ex" data-rest="${ex.rest||0}" data-next="${ex.name}">${head}${body}${howBlock(ex)}</article>`;
  }).join('');
  main.innerHTML = `
    <div class="fhead">
      <h1>Ficha ${current.toUpperCase()} <span>·</span> ${f.title}</h1>
      <div class="stats"><span><b>${f.sets}</b>séries</span><span><b>~${f.min}</b>min</span><span><b id="doneN">0</b>feitas</span><span>${[f.sub,cycleLabel(f)].filter(Boolean).join(' · ')}</span></div>
      <div class="brief ${f.warn?'warn':''}">${f.brief}</div>
      ${RULES}
    </div>
    ${items}
    <div class="sum"><h3>Volume da sessão</h3><table>${(f.volume||[]).map(([g,n])=>`<tr><td>${g==='Total'?'<strong>Total</strong>':g}</td><td>${n}</td></tr>`).join('')}</table>${f.note?`<p class="note">${f.note}</p>`:''}</div>
    <div class="finish">
      <button id="finish">Finalizar treino</button>
      <p>Guarda as cargas de hoje como referência “últ.” e limpa os checks pra próxima sessão.</p>
      <button class="clear" id="clearAll">Apagar todas as cargas salvas</button>
    </div>`;
  bind(); progress();
}
function bind(){
  document.querySelectorAll('.set').forEach(s=>{
    const inp = s.querySelector('input'), chk = s.querySelector('.chk');
    const k = s.dataset.key+'|', i = s.dataset.i;
    if(inp) inp.addEventListener('input',()=>save(k+'kg'+i, inp.value));
    chk.addEventListener('click',()=>toggle(s));
  });
  document.querySelectorAll('.media[data-yt]').forEach(m=>{
    const play=()=>{ const st=+m.dataset.start||0; m.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${m.dataset.yt}?autoplay=1&rel=0&playsinline=1&modestbranding=1${st?'&start='+st:''}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`; m.removeAttribute('data-yt'); };
    m.addEventListener('click',play);
    m.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); play(); } });
  });
  document.querySelectorAll('.ex').forEach(card=>{
    const all=[...card.querySelectorAll('.set:not(.aq)')];
    card.classList.toggle('done', all.length>0 && all.every(x=>x.classList.contains('on')));
  });
  document.querySelectorAll('.vtog button').forEach(b=>b.onclick=()=>{
    const box=b.closest('.howbody'), v=b.dataset.v;
    box.querySelectorAll('.vtog button').forEach(x=>x.setAttribute('aria-pressed', x.dataset.v===v));
    box.querySelectorAll('.vpane').forEach(p=>p.hidden = p.dataset.v!==v);
  });
  document.getElementById('finish').onclick=finish;
  document.getElementById('clearAll').onclick=clearAll;
}
function toggle(s){
  const on = !s.classList.contains('on');
  s.classList.toggle('on', on);
  const b=s.querySelector('.chk'); b.textContent=on?'✓':'○'; b.setAttribute('aria-pressed',on);
  save(s.dataset.key+'|done'+s.dataset.i, on?'1':'0');
  const card = s.closest('.ex');
  const all = [...card.querySelectorAll('.set:not(.aq)')];
  card.classList.toggle('done', all.every(x=>x.classList.contains('on')));
  progress();
  if(on && !s.classList.contains('aq') && +card.dataset.rest>0) startRest(+card.dataset.rest, card);
}
function progress(){
  const all=[...document.querySelectorAll('.set:not(.aq)')], done=all.filter(x=>x.classList.contains('on')).length;
  document.getElementById('bar').style.width=(all.length?done/all.length*100:0)+'%';
  const n=document.getElementById('doneN'); if(n) n.textContent=done;
}
function finish(){
  if(!confirm('Finalizar a Ficha '+current.toUpperCase()+'? As cargas de hoje viram a referência da próxima sessão.')) return;
  document.querySelectorAll('.set').forEach(s=>{
    const k=s.dataset.key+'|', i=s.dataset.i;
    const v=store(k+'kg'+i);
    if(v) save(k+'prev'+i, v);
    drop(k+'kg'+i); drop(k+'done'+i);
  });
  clearInterval(tick); rest.classList.remove('show');
  render(); window.scrollTo({top:0});
}
function clearAll(){
  if(!confirm('Apagar TODAS as cargas e referências salvas, de todas as fichas?')) return;
  const keep = ['active','theme','mode','keys_v3'].map(k=>PREFIX+k);
  try { Object.keys(localStorage).filter(k=>k.startsWith(PREFIX)&&!keep.includes(k)).forEach(k=>localStorage.removeItem(k)); } catch(e){}
  render();
}

/* ---------- cronômetro de descanso ---------- */
let tick=null;
const rest=document.getElementById('rest'), restT=document.getElementById('restT'), restNext=document.getElementById('restNext');
const fmt = s => Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
function startRest(sec, card){
  clearInterval(tick);
  let left=sec;
  const nxt = card.querySelector('.set:not(.on)') ? card.dataset.next : (card.nextElementSibling?.dataset.next ?? 'Fim da ficha');
  restNext.textContent = nxt;
  restT.textContent=fmt(left); rest.classList.add('show');
  tick=setInterval(()=>{ left--; restT.textContent=fmt(left); if(left<=0){ clearInterval(tick); rest.classList.remove('show'); if(navigator.vibrate) navigator.vibrate([120,60,120]); } },1000);
}
document.getElementById('restSkip').onclick=()=>{ clearInterval(tick); rest.classList.remove('show'); };

/* ---------- modos + tema ---------- */
const mT=document.getElementById('mTreino'), mE=document.getElementById('mEstudo');
function mode(study){
  document.body.classList.toggle('study',study);
  mT.setAttribute('aria-pressed',!study); mE.setAttribute('aria-pressed',study);
  document.querySelectorAll('.how').forEach(d=>d.open=study);
  const ru=document.getElementById('rules'); if(ru) ru.open=study;
  save('mode', study?'study':'train');
}
mT.onclick=()=>mode(false); mE.onclick=()=>mode(true);
document.getElementById('theme').onclick=()=>{
  const r=document.documentElement, cur=r.getAttribute('data-theme');
  const dark = cur ? cur==='dark' : matchMedia('(prefers-color-scheme:dark)').matches;
  const next = dark?'light':'dark'; r.setAttribute('data-theme', next); save('theme', next);
};
const savedTheme = store('theme'); if(savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
migrate();
current = FICHAS[store('active')] ? store('active') : Object.keys(FICHAS)[0];
render();
if(store('mode')==='study') mode(true);
})();
