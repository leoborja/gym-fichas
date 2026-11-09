/* Fichas do Leo · ABC em rodízio (5 dias/semana) · mesociclo de Acumulação.
 * Ciclo anterior (A–E, jul–nov/2026): fichas/arquivo/leo-2026-07.js
 * Esquema dos campos: ver CLAUDE.md. Vídeos: videos.js (V.*). */
const CICLO = { nome:"Acumulação · ABC", semana:"1/5", gerada:"2026-11-09" };

const RULES = `<details class="rules" id="rules">
  <summary>Regras da ficha · ABC em rodízio<span class="chev">▾</span></summary>
  <table>
    <tr><td>Rodízio</td><td>5 dias por semana, sempre a <b>próxima letra</b>: A → B → C → A → B, e na semana seguinte continua de onde parou (C → A → B → C → A). Cada ficha cai ~1,7x por semana. Faltou um dia? Não pula letra, só segue a sequência.</td></tr>
    <tr><td>Joelho</td><td>Perna só na C (com bíceps), com os exercícios do fisio. Carga 40–50% do pré-cirurgia, <b>RPE ≤7, sem falha, sem técnica intensificadora</b>. Elástico nas 3 direções antes, sempre. Abdutora só com OK do fisio (até lá, elástico lateral).</td></tr>
    <tr><td>Lombar</td><td>Nada de supino com barra nem máquina de supino. Press de peito = supino sentado no cross.</td></tr>
    <tr><td>Ordem</td><td>Um grupo inteiro antes do próximo: todo peito → todo ombro (A); costas → tríceps (B), e na C a perna alterna com o bíceps.</td></tr>
    <tr><td>Progressão</td><td>Fechou o topo da faixa em todas as séries → sobe a carga na próxima vez que a ficha cair (+2,5–5 kg em composto, +1–2,5 kg em isolador).</td></tr>
  </table>
  <div class="foot">Volume semanal (com o rodízio, ~1,7x cada): peito ~32 · ombro ~25 (lateral direto ~10) · costas ~27 · tríceps ~20 · bíceps ~20 · perna ~30 · abs ~5.</div>
</details>`;

const FICHAS = {
  a:{tab:"Peito · Ombro", title:"Peito superior + Ombro", sub:"Pesado", sets:34, min:42,
    brief:"<strong>Regra do dia:</strong> completar TODO o peito antes de tocar em ombro. Press no supino sentado no cross (coluna apoiada, zero lombar). Agora é a ÚNICA ficha de peito e ombro: cai ~1,7x por semana no rodízio, então cada sessão é pra valer.",
    items:[
      {warm:true, name:"Manguito rotador externo", tags:["aquecimento","ombro"], sets:3, reps:"15", rest:0, yt:V.manguito,
       cues:["Cotovelo a 90° colado ao corpo","Halter leve ou elástico, rotação externa","Sem descanso entre lados"],
       why:"Não é treino, é seguro de vida do ombro. Pula e paga com lesão."},
      {block:"Bloco peito · superior"},
      {n:1, name:"Supino sentado no cross · inclinado", tags:["peito superior"], tech:"Pirâmide + drop set na 4ª", sets:4, reps:"12 · 10 · 8 · 8", rest:90, yt:V.crossPressIncl,
       cues:["Banco a 30–40°, cabos na altura do peito alto","Pirâmide: SOBE o peso a cada série (12 → 10 → 8 → 8)","Descer em 3s, explodir na subida","4ª série: 8 reps → −30% → mais 8"],
       why:"Composto principal do dia, sem superset: foco total na carga. Mesmo press (é o único que não machuca a lombar), mas com pirâmide e drop no lugar do rest-pause: estímulo novo. Fechou as reps em todas → sobe a carga."},
      {n:2, name:"Tri-set · Cross reto + Crucifixo inclinado no cross + Flexão", tags:["peito médio","peito superior"], sets:3, reps:"10 · 12 · máx", rest:90,
       parts:[
         {l:"A", name:"Supino sentado no cross · reto", sub:"Empurra · pesado · 10", yt:V.crossPressReto},
         {l:"B", name:"Crucifixo inclinado no cross", sub:"Estica · banco inclinado entre os cabos · 12", yt:V.crucInclCross},
         {l:"C", name:"Flexão de braço", sub:"Peso do corpo · até a falha", yt:V.flexao, u:"reps"}
       ],
       cues:["Cross reto e crucifixo na mesma estação do cross: só troca o banco e a altura das polias","Cross reto: banco plano, cabos na altura do peito, descer 2–3s, explodir","Crucifixo no cross: banco a 30° no meio, cabos baixos, abrir até sentir o alongamento, fechar em arco","Flexão: mãos um pouco mais abertas que os ombros, abdômen e glúteo travados (corpo em prancha, lombar neutra), peito quase no chão, até a falha"],
       why:"Empurrar → esticar → empurrar até a falha: o press cansa o peito, o crucifixo pega a fase alongada e a flexão arranca o que sobrou. Sem crossover em pé, que dava dor nas costas."},
      {n:3, name:"Superset · Pullover + Supino inclinado com halteres", tags:["peito superior","caixa torácica","finisher"], sets:3, reps:"12 + 12–15", rest:75,
       parts:[
         {l:"A", name:"Pullover com halter", sub:"Caixa torácica · 12", yt:V.pullover},
         {l:"B", name:"Supino inclinado com halteres", sub:"Peito superior · 12–15", yt:V.supinoHalterIncl}
       ],
       cues:["Pullover: perpendicular no banco, quadril baixo, halter bem atrás da cabeça, voltar contraindo o peito","Supino halteres: banco inclinado 30°, descer fundo até o alongamento, subir juntando os halteres. 20 kg chega: aqui o peito já está cansado","Lombar reclamou no banco? Troca o supino por mais uma série de flexão"],
       why:"Mais um de peito pra fechar: o pullover estica a caixa torácica e o supino com halteres dá amplitude livre no peito superior já pré-cansado."},
      {block:"Bloco ombro · desenvolvimento + medial + posterior"},
      {n:4, name:"Superset · Arnold press + Elevação lateral", tags:["deltóide · 3 cabeças","deltóide medial"], tech:"Drop set no Arnold (3ª)", sets:3, reps:"8–10 + 15", rest:75,
       parts:[
         {l:"A", name:"Arnold press sentado", sub:"Halteres · pesado · 8–10", yt:V.arnold},
         {l:"B", name:"Elevação lateral com halteres", sub:"Medial · o 3D · 15", yt:V.lateralHalter}
       ],
       cues:["Arnold: sentado com encosto, palmas começam viradas pra você e giram durante a subida, descer até a altura do queixo","3ª série do Arnold: 8–10 → pega halteres 30% mais leves → falha","Lateral: mindinho levemente pra cima, “derramar a jarra”, sem balançar o corpo","Mesmo par de halteres na mão, mesma estação: zero tempo perdido"],
       why:"O único exercício que leva o nome dele: as 3 cabeças do deltóide de uma vez, com a rotação que o desenvolvimento na máquina não tem. A lateral vem logo em seguida e pega o medial já aquecido."},
      {n:5, name:"Tri-set · Lateral cruzada no cabo + Posterior curvado + Face pull", tags:["deltóide medial","posterior"], tech:"Drop set na lateral (3ª)", sets:3, reps:"12 · 12 · 15", rest:60,
       parts:[
         {l:"A", name:"Elevação lateral cruzada no cabo", sub:"Tensão constante · 12", yt:V.lateralCruzadaCabo},
         {l:"B", name:"Elevação posterior curvado", sub:"Abre o posterior · 12", yt:V.posteriorCurvado},
         {l:"C", name:"Face pull na corda", sub:"Puxa · posterior + saúde articular · 15", yt:V.facepull}
       ],
       cues:["Lateral no cabo: cabo baixo cruzando na frente do corpo, elevar até o paralelo","3ª série da lateral: 12 → −30% → falha","Curvado: tronco à frente, abrir pros lados, squeeze 2s no topo","Face pull: cotovelos ALTOS, puxar pra cara, squeeze 2s. Fecha o treino cuidando do ombro"],
       why:"2ª dose de medial em outro ângulo (cabo) e o posterior em dois padrões: abrir (curvado) e puxar (face pull). Com o rodízio dá ~10 séries diretas de lateral por semana, o alvo 3D."}
    ],
    volume:[["Peito (viés superior)",19],["Ombro",15],["Total",34]],
    note:"Por semana (~1,7x): peito ~32 séries (bem acima da meta de 18–22, de propósito: peito é P0; se a recuperação pesar, corta uma rodada do superset 3), ombro ~25, lateral direto ~10. Abs fica todo na C. Técnicas: pirâmide + drop no press, flexão até a falha, drop set no Arnold e na lateral."},

  b:{tab:"Costas · Tríceps", title:"Costas + Tríceps", sub:"Pesado", sets:31, min:43,
    brief:"<strong>Regra do dia:</strong> a puxada abre pesada e sozinha, depois tri-set só de costas. Aí entra o tri-set costas + tríceps + abdominal (tudo no cabo, áreas que não se atrapalham) e fecha com o tríceps. Bíceps agora é na Ficha C.",
    items:[
      {block:"Bloco costas"},
      {n:1, name:"Puxada frontal pegada aberta", tags:["largura"], tech:"Pirâmide + drop set na 4ª", sets:4, reps:"12 · 10 · 8 · 8", rest:90, yt:V.puxadaAlta,
       cues:["Pirâmide: SOBE o peso a cada série (12 → 10 → 8 → 8)","Puxar até a clavícula, peito estufado, retrair as escápulas no fim","Subir em 2s controlando","4ª série: 8 reps → −30% → mais 8"],
       why:"Composto principal do dia, sem superset: foco total na carga. Constrói a LARGURA, o “V”."},
      {n:2, name:"Tri-set · Remada triângulo + Puxada supinada + Pulldown na corda", tags:["espessura","dorsal inferior","dorsal"], sets:3, reps:"10 · 12 · 15", rest:90,
       parts:[
         {l:"A", name:"Remada baixa com triângulo", sub:"Puxa na horizontal · pesada · 10", yt:V.remadaTri},
         {l:"B", name:"Puxada supinada · pegada fechada", sub:"Puxa na vertical · 12", yt:V.puxadaSupinada},
         {l:"C", name:"Pulldown na corda (braço reto)", sub:"Isola o dorsal · 15", yt:V.pulldownCorda}
       ],
       cues:["Remada triângulo: puxar pro abdômen, peito estufado, cotovelos rentes, apertar a escápula 1s. NÃO usar a lombar. Sobe o peso a cada série","Supinada: mãos viradas pra você, puxar até o peito alto, cotovelos rentes ao corpo","Pulldown: polia alta, braços quase retos, levar a corda até a coxa em arco. Abdômen travado, leve inclinação do quadril, sem balançar a lombar"],
       why:"Três padrões diferentes: puxar na horizontal (espessura), puxar na vertical (dorsal inferior) e isolar o dorsal sem bíceps."},
      {block:"Bloco costas + tríceps + abs"},
      {n:3, name:"Tri-set · Remada máquina apoio de peito + Pulley barra reta + Supra na corda", tags:["costas alta","tríceps","abs"], sets:3, reps:"10 · 10 · 20", rest:75,
       parts:[
         {l:"A", name:"Remada na máquina com apoio de peito", sub:"Costas alta · pegada aberta · pesada · 10", yt:V.remadaMaq},
         {l:"B", name:"Tríceps pulley barra reta", sub:"Tríceps · pesado · 10", yt:V.tricepsBarraReta},
         {l:"C", name:"Abdominal supra na corda (polia)", sub:"Abs · 20", yt:V.supraCorda}
       ],
       cues:["Remada máquina: peito colado no apoio, pegada aberta, puxar com os cotovelos abertos e apertar as escápulas 1s. A lombar fica apoiada, então dá pra carregar de verdade. Sem a máquina na academia → remada unilateral no cabo","Pulley barra reta: cotovelos colados ao corpo, estender até travar embaixo, subir controlando","Supra corda: ajoelhado, flexionar o tronco, expirar forte na contração","Monta o trio perto: máquina de remada + uma polia com barra reta e corda"],
       why:"A remada com apoio de peito é melhor que a barra reta no cabo: o peito apoiado tira a lombar da jogada e o tronco não balança, então a carga vai toda pras costas (trapézio médio, romboides, posterior). Junto, já começa o tríceps e o abdômen: três áreas que não se atrapalham."},
      {block:"Bloco tríceps · fecha"},
      {n:4, name:"Superset · Francês unilateral + Mergulho", tags:["cabeça longa","todas"], sets:3, reps:"12 + máx", rest:60,
       parts:[
         {l:"A", name:"Tríceps francês unilateral com halter", sub:"Cabeça longa alongada · 12 cada braço", yt:V.francesUni},
         {l:"B", name:"Mergulho no banco", sub:"Todas · até a falha", yt:V.mergulhoBanco, u:"reps"}
       ],
       cues:["Francês: sentado com encosto, halter atrás da cabeça, descer fundo até alongar o tríceps, cotovelo apontando pro teto","Mergulho: mãos no banco atrás, pés à frente, cotovelo a 90°, até a falha"],
       why:"O francês pega a cabeça longa na posição alongada, onde ela mais cresce, e o mergulho fecha com tudo que sobrou."},
      {n:5, name:"Tríceps pulley corda", tags:["lateral/medial","finisher"], tech:"Drop set na 3ª", sets:3, reps:"15", rest:45, yt:V.tricepsCorda,
       cues:["Cotovelos colados ao corpo, estender e ABRIR a corda embaixo, segurar 1s","Subir controlando, sem deixar o cotovelo ir pra frente","3ª série: 15 → −30% → falha"],
       why:"Finisher de bombeamento: a corda deixa abrir as mãos no fim e espremer a cabeça lateral, a que dá o formato de ferradura."}
    ],
    volume:[["Costas",16],["Tríceps",12],["Abs",3],["Total",31]],
    note:"Por semana (~1,7x): costas ~27 (acima da meta de 12–16, você pediu mais costas), tríceps ~20 (+ os presses e a flexão da A), abs ~5. Técnicas: pirâmide + drop na puxada, mergulho até a falha, drop set na corda."},

  c:{tab:"Perna · Bíceps", title:"Perna + Bíceps", sub:"Retomada", sets:30, min:38,
    brief:"<strong>Retomada pós-op joelho.</strong> Mesmo bloco de perna de antes: carga conservadora (40–50%), RPE máximo 7, sem falha e sem técnica intensificadora na perna. Qualquer desconforto no joelho → parar a série e reduzir. A perna descansa enquanto o bíceps trabalha: as técnicas são só pro bíceps.", warn:true,
    items:[
      {warm:true, name:"Elástico nas 3 direções", tags:["aquecimento","fisio"], sets:2, reps:"10 cada direção", rest:0, yt:V.elastico3dir, u:"round",
       cues:["Elástico no tornozelo, apoio firme, abdômen contraído","Lado (glúteo médio) → frente (flexor) → trás (glúteo + posterior)","Sem descanso entre as direções"],
       why:"Prescrito pelo fisio. É o que mantém o joelho seguro. Não pular."},
      {n:1, name:"Tri-set · Agachamento + Rosca EZ + Martelo", tags:["perna","bíceps"], care:"Perna: RPE ≤7, sem falha", tech:"21s na rosca EZ (3ª)", sets:3, reps:"12 · 10 · 12", rest:75,
       parts:[
         {l:"A", name:"Agachamento (pouco peso)", sub:"Sem passar do paralelo · 12", yt:V.agacho},
         {l:"B", name:"Rosca direta barra EZ", sub:"Bíceps · 10", yt:V.roscaEZ},
         {l:"C", name:"Rosca martelo", sub:"Braquial, espessura · 12", yt:V.martelo}
       ],
       cues:["Agachamento: 40–50% do pré-cirurgia, descer 2s, joelho alinhado à ponta do pé, NÃO valgizar","Rosca EZ: cotovelos colados, sem balançar","3ª série da EZ: 21s → 7 da base até a metade + 7 da metade até o topo + 7 completas, sem pausa","Martelo: pegada neutra. “Braço grosso é rosca martelo”"],
       why:"A perna descansa enquanto DOIS bíceps trabalham: fadiga máxima no braço, zero fadiga cumulativa no joelho. Os 21s eram o método do Arnold pra pico."},
      {n:2, name:"Tri-set · Pélvica + Alternada + Scott", tags:["glúteo","bíceps"], sets:3, reps:"15 · 12 · 10", rest:75,
       parts:[
         {l:"A", name:"Elevação pélvica na máquina", sub:"Glúteo, seguro pro joelho · 15", yt:V.pelvicaMaq},
         {l:"B", name:"Rosca alternada com halteres", sub:"12 (6 por braço)", yt:V.alternada},
         {l:"C", name:"Rosca scott barra EZ", sub:"Pico · 10", yt:V.scott}
       ],
       cues:["Pélvica: empurrar com os calcanhares, contrair o glúteo 2s no topo","Alternada: supinar no topo (girar o mindinho pra fora)","Scott: cotovelo apoiado, descer com controle, sem trapaça"],
       why:"Pélvica é o rei do glúteo com mínimo estresse no joelho. Bíceps em quatro variações ao longo da sessão: EZ, martelo, alternada e scott."},
      {n:3, name:"Superset · Extensora unilateral + Panturrilha em pé", tags:["quadríceps","panturrilha"], sets:3, reps:"12 + 15", rest:45,
       parts:[
         {l:"A", name:"Cadeira extensora unilateral", sub:"12 cada perna · fisio", yt:V.extensoraUni},
         {l:"B", name:"Panturrilha em pé", sub:"Gastrocnêmio · 15", yt:V.pantPe}
       ],
       cues:["Extensora: uma perna por vez, subir 2s, segurar 1s, descer 2s. NÃO travar o joelho","Panturrilha: alongamento máximo embaixo, contração 1s no topo, ROM completo"],
       why:"A panturrilha não estressa o joelho, então serve de descanso pro joelho entre as séries de extensora."},
      {n:4, name:"Superset · Flexora unilateral + Abdutora", tags:["posterior de coxa","glúteo médio"], care:"Abdutora pendente de OK do fisio", sets:3, reps:"12 + 15", rest:45,
       parts:[
         {l:"A", name:"Cadeira flexora unilateral", sub:"12 cada perna · fisio", yt:V.flexoraUni},
         {l:"B", name:"Cadeira abdutora", sub:"15 · ou elástico lateral", yt:V.abdutora}
       ],
       cues:["Flexora: uma perna por vez, subir 2s, segurar 1s, descer 2s. NÃO travar o joelho","Abdutora: tronco levemente à frente, abrir contra a resistência, contrair o glúteo médio no fim"],
       why:"Abdutora é movimento de quadril, não estressa o joelho. Enquanto o fisio não liberar, usar o elástico de abertura lateral no lugar."}
    ],
    volume:[["Perna",18],["Bíceps",12],["Total",30]],
    note:"Perna ~1,7x por semana, mesmo bloco de sempre. ~9 séries de carga direta no joelho por sessão; o resto é quadril e tornozelo. Bíceps ~20 séries/semana. Progredir a perna só com todas as reps em RPE ≤7 e zero desconforto."}
};

window.GB = { prefix:'gb2_', fichas:FICHAS, ciclo:CICLO, rules:RULES };
