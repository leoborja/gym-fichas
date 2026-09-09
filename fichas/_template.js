/* Esqueleto de ficha pra uma pessoa nova. Copiar pra fichas/<nome>.js e preencher.
 * Esquema completo dos campos e fluxo: CLAUDE.md ("Como criar uma ficha pra outra pessoa").
 * Vídeos de execução: videos.js (V.*). Segundo vídeo opcional por exercício: lr:{yt, start}. */

const CICLO = { nome:"Ciclo 1", semana:"1/8", gerada:"AAAA-MM-DD" };

/* Cards de aquecimento reutilizados em todos os dias */
const AQ = {warm:true, name:"5 min de cardio leve + manguito", tags:["aquecimento","ombro"], sets:2, reps:"15–20", rest:0, yt:V.manguito,
  cues:["5 min de elíptico ou bike em ritmo leve","Manguito: cotovelo a 90° colado ao corpo, carga leve, longe da fadiga","Séries de aproximação do 1º exercício estão no card dele (A1 e A2)"],
  why:"Aquecimento geral + específico."};

/* Bloco de regras no topo (null se não quiser). Uma linha por restrição da pessoa. */
const RULES = `<details class="rules" id="rules">
  <summary>Regras da ficha<span class="chev">▾</span></summary>
  <table>
    <tr><td>Intensidade</td><td>…</td></tr>
    <tr><td>Limitação</td><td>…</td></tr>
    <tr><td>Reps</td><td>Pesado 6–10 · intermediário 8–12 · isoladores 10–15. Fechou o topo em todas as séries → sobe carga.</td></tr>
    <tr><td>Descanso</td><td>Pesado 2–3 min · intermediário 1m30 · isolador 1 min.</td></tr>
    <tr><td>Ciclo</td><td>Sem 1–2 aprender cargas · 3–4 regra cheia · 5–7 +1 série nos isoladores · 8 regenerativa.</td></tr>
  </table>
  <div class="foot">Volume semanal: … Fontes: docs/&lt;nome&gt;/FICHA.md</div>
</details>`;

const FICHAS = {
  a:{tab:"Peito pesado", title:"Full Body · peito pesado", sub:"Segunda", sets:0, min:0,
    brief:"<strong>Pesado do dia: …</strong> …",
    items:[
      AQ,
      {block:"Pesado do dia"},
      {n:1, approach:true, name:"…", tags:["peito","médio"], tech:"Última série na falha", care:"Limitação: …", sets:4, reps:"6–10", rest:150, yt:V.supinoHalter, lr:{yt:"ID", start:0},
       cues:["…"], why:"…"},
      {block:"Superiores"},
      {n:2, name:"Superset · A + B", tags:["…"], sets:3, reps:"12 + 12", rest:60,
       parts:[ {l:"A", name:"…", sub:"…", yt:V.tricepsCorda}, {l:"B", name:"…", sub:"…", yt:V.marteloCorda} ],
       cues:["…"], why:"…"}
    ],
    volume:[["Peito",4],["Total",0]],
    note:"…"},
  b:{ /* … */ },
  c:{ /* … */ }
};

window.GB = { prefix:'nome_', fichas:FICHAS, ciclo:CICLO, rules:RULES, altLabel:'Fulano explica' };
