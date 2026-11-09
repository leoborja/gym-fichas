/* Fichas do Leo · ABC em rodízio (5 dias/semana) · mesociclo de Acumulação.
 * Ciclo anterior (A–E, jul–nov/2026): fichas/arquivo/leo-2026-07.js
 * Esquema dos campos: ver CLAUDE.md. Vídeos: videos.js (V.*). */
const CICLO = { nome:"Acumulação · ABC", semana:"1/5", gerada:"2026-11-09" };

const RULES = `<details class="rules" id="rules">
  <summary>Regras da ficha · ABC em rodízio<span class="chev">▾</span></summary>
  <table>
    <tr><td>Rodízio</td><td>5 dias por semana, sempre a <b>próxima letra</b>: A → B → C → A → B, e na semana seguinte continua de onde parou (C → A → B → C → A). Cada ficha cai ~1,7x por semana. Faltou um dia? Não pula letra, só segue a sequência.</td></tr>
    <tr><td>Joelho</td><td>Perna só na C, com os exercícios do fisio. Carga 40–50% do pré-cirurgia, <b>RPE ≤7, sem falha, sem técnica intensificadora</b>. Elástico nas 3 direções antes, sempre. Abdutora só com OK do fisio (até lá, elástico lateral).</td></tr>
    <tr><td>Lombar</td><td>Nada de supino com barra nem máquina de supino. Press de peito = supino sentado no cross.</td></tr>
    <tr><td>Ordem</td><td>Um grupo inteiro antes do próximo: todo peito → todo ombro (A); costas → bíceps → tríceps (B).</td></tr>
    <tr><td>Progressão</td><td>Fechou o topo da faixa em todas as séries → sobe a carga na próxima vez que a ficha cair (+2,5–5 kg em composto, +1–2,5 kg em isolador).</td></tr>
  </table>
  <div class="foot">Volume semanal (com o rodízio, ~1,7x cada): peito ~27 · ombro ~25 (lateral direto ~10) · costas ~23 · bíceps ~10 + puxadas · tríceps ~15 · perna ~30 · abs ~25.</div>
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
      {n:2, name:"Tri-set · Cross reto + Crucifixo inclinado no cross + Crossover baixo", tags:["peito médio","peito superior"], sets:3, reps:"10 · 12 · 15", rest:90,
       parts:[
         {l:"A", name:"Supino sentado no cross · reto", sub:"Empurra · pesado · 10", yt:V.crossPressReto},
         {l:"B", name:"Crucifixo inclinado no cross", sub:"Estica · banco inclinado entre os cabos · 12", yt:V.crucInclCross},
         {l:"C", name:"Crossover polia baixa", sub:"Aperta · superior contraído · 15", yt:V.crossoverBaixo}
       ],
       cues:["Tudo na mesma estação do cross: só troca o banco e a altura das polias, sem perder tempo","Cross reto: banco plano, cabos na altura do peito, descer 2–3s, explodir","Crucifixo no cross: banco a 30° no meio, cabos baixos, abrir até sentir o alongamento, fechar em arco","Crossover baixo: em pé, subir cruzando na frente até a altura do queixo, segurar 2s no pico"],
       why:"Empurrar → esticar → apertar: três padrões diferentes, não três flys por fazer. O press cansa o peito, o crucifixo pega a fase alongada e o crossover espreme o que sobrou. É o peito pegando fogo."},
      {n:3, name:"Tri-set · Pullover + Canivete + Desenvolvimento", tags:["peito","abs","ombro"], tech:"Drop set no desenvolvimento (3ª)", sets:3, reps:"12 · 15 · 8–10", rest:75,
       parts:[
         {l:"A", name:"Pullover com halter", sub:"Caixa torácica · 12", yt:V.pullover},
         {l:"B", name:"Canivete", sub:"Abs · 15", yt:V.canivete, u:"corpo"},
         {l:"C", name:"Desenvolvimento na máquina", sub:"Ombro pesado · 8–10", yt:V.desenvMaq}
       ],
       cues:["Pullover: perpendicular no banco, quadril baixo, halter bem atrás da cabeça","Canivete: pernas e tronco sobem juntos, sem impulso","Desenvolvimento: descer abaixo do queixo, subir sem travar o cotovelo","3ª série do desenvolvimento: 8–10 → −30% → falha"],
       why:"Cada um pega uma área diferente, nenhum fatiga o deltóide. O desenvolvimento chega fresco: é o construtor pesado do ombro."},
      {block:"Bloco ombro · medial + posterior"},
      {n:4, name:"Superset · Elevação lateral + Face pull", tags:["deltóide medial","posterior"], sets:3, reps:"15 + 15", rest:60,
       parts:[
         {l:"A", name:"Elevação lateral com halteres", sub:"Medial · o 3D", yt:V.lateralHalter},
         {l:"B", name:"Face pull na corda", sub:"Posterior + saúde articular", yt:V.facepull}
       ],
       cues:["Lateral: mindinho levemente pra cima, “derramar a jarra”, sem balançar o corpo","Face pull: cotovelos ALTOS, puxar pra cara, squeeze 2s"],
       why:"As duas cabeças que os pressings não pegam. Anterior já foi martelado pelos presses."},
      {n:5, name:"Superset · Lateral cruzada no cabo + Posterior curvado", tags:["deltóide medial","posterior"], tech:"Drop set na lateral (3ª)", sets:3, reps:"12 + 12", rest:45,
       parts:[
         {l:"A", name:"Elevação lateral cruzada no cabo", sub:"Tensão constante · 12", yt:V.lateralCruzadaCabo},
         {l:"B", name:"Elevação posterior curvado", sub:"Fecha o posterior · 12", yt:V.posteriorCurvado}
       ],
       cues:["Lateral no cabo: cabo baixo cruzando na frente do corpo, elevar até o paralelo","3ª série da lateral: 12 → −30% → falha","Curvado: tronco à frente, abrir pros lados, squeeze 2s no topo"],
       why:"2ª dose de medial + posterior em outro ângulo: halter em pé no 4, cabo aqui. Com o rodízio dá ~10 séries diretas de lateral por semana, o alvo 3D."}
    ],
    volume:[["Peito (viés superior)",16],["Ombro",15],["Abs",3],["Total",34]],
    note:"Por semana (~1,7x): peito ~27 séries (acima da meta de 18–22, de propósito: peito é P0), ombro ~25, lateral direto ~10. Técnicas: pirâmide + drop no press, tri-set de peito, drop set no desenvolvimento e na lateral."},

  b:{tab:"Costas · Braços", title:"Costas + Bíceps + Tríceps", sub:"Denso", sets:29, min:40,
    brief:"<strong>Regra do dia:</strong> TODA a costas primeiro (dorsal fresco), depois bíceps, depois tríceps. Sem ping-pong entre estações. As puxadas já aquecem o bíceps; o tríceps chega inteiro pro bloco dele.",
    items:[
      {block:"Bloco costas · tudo primeiro"},
      {n:1, name:"Superset · Puxada aberta + Remada triângulo", tags:["largura","espessura"], sets:3, reps:"12 + 10", rest:60,
       parts:[
         {l:"A", name:"Puxada frontal pegada aberta", sub:"Largura · o “V” · 12", yt:V.puxadaAlta},
         {l:"B", name:"Remada baixa com triângulo", sub:"Espessura · 10", yt:V.remadaTri}
       ],
       cues:["Puxada: puxar até a clavícula, retrair escápulas no fim, subir em 2s","Remada: puxar pro abdômen, peito estufado, cotovelos rentes, apertar a escápula. NÃO usar a lombar"],
       why:"Largura + espessura: os dois pilares do dorsal."},
      {n:2, name:"Superset · Remada barra reta + Puxada supinada", tags:["costas alta","dorsal inferior"], sets:3, reps:"10 + 12", rest:60,
       parts:[
         {l:"A", name:"Remada baixa barra reta · pegada aberta", sub:"Pronada, pesada · 10", yt:V.remadaBarraPronada},
         {l:"B", name:"Puxada supinada · pegada fechada", sub:"Dorsal inferior · 12", yt:V.puxadaSupinada}
       ],
       cues:["Remada: pegada pronada e aberta, puxar pro baixo do peito, apertar a escápula 1s. Carrega de verdade, subindo a cada série","Supinada: mãos viradas pra você, puxar até o peito alto, cotovelos rentes ao corpo"],
       why:"Costas aguentam muito peso: aqui resolve o limite do halter de 20kg. Ângulos totalmente diferentes do exercício 1."},
      {n:3, name:"Barra fixa pegada aberta", tags:["largura","finisher"], sets:2, reps:"máx", rest:60, yt:V.barraFixa, u:"reps",
       cues:["Pegada aberta, queixo passa a barra","Descer com controle","Registrar quantas reps saíram"],
       why:"Favorito do Arnold pra largura. Fecha o bloco de costas com tudo que sobrou. “A última rep é a que constrói campeões.”"},
      {block:"Bloco bíceps"},
      {n:4, name:"Superset · Rosca EZ + Martelo", tags:["bíceps","braquial"], tech:"21s na rosca EZ (3ª)", sets:3, reps:"10 + 12", rest:60,
       parts:[
         {l:"A", name:"Rosca direta barra EZ", sub:"Bíceps · 10", yt:V.roscaEZ},
         {l:"B", name:"Rosca martelo", sub:"Braquial, espessura · 12", yt:V.martelo}
       ],
       cues:["Rosca EZ: cotovelos colados, sem balançar","3ª série da EZ: 21s → 7 da base até a metade + 7 da metade até o topo + 7 completas, sem pausa","Martelo: pegada neutra. “Braço grosso é rosca martelo”"],
       why:"Bíceps + bíceps, fadiga local máxima. Os 21s eram o método do Arnold pra pico."},
      {block:"Bloco tríceps · por último"},
      {n:5, name:"Tri-set · Testa EZ + Corda + Mergulho", tags:["cabeça longa","lateral","todas"], sets:3, reps:"10 · 15 · máx", rest:75,
       parts:[
         {l:"A", name:"Tríceps testa barra EZ", sub:"Cabeça longa · 10", yt:V.testaEZ},
         {l:"B", name:"Tríceps pulley corda", sub:"Lateral/medial · 15", yt:V.tricepsCorda},
         {l:"C", name:"Mergulho no banco", sub:"Todas · até a falha", yt:V.mergulhoBanco, u:"reps"}
       ],
       cues:["Testa: descer ATRÁS da cabeça, não na testa","Corda: abrir as mãos embaixo","Mergulho: mãos no banco atrás, pés à frente, cotovelo a 90°, até a falha"],
       why:"As 3 cabeças em sequência: composto pesado → isolador → peso corporal até a falha."}
    ],
    volume:[["Costas",14],["Bíceps",6],["Tríceps",9],["Total",29]],
    note:"Por semana (~1,7x): costas ~23, bíceps ~10 diretas (+ o trabalho das puxadas), tríceps ~15 (+ os presses da A)."},

  c:{tab:"Perna · Abs", title:"Perna + Abdômen", sub:"Retomada", sets:30, min:38,
    brief:"<strong>Retomada pós-op joelho.</strong> Mesmo bloco de perna de antes: carga conservadora (40–50%), RPE máximo 7, sem falha e sem técnica intensificadora na perna. Qualquer desconforto no joelho → parar a série e reduzir. Abs intercalado: o joelho descansa enquanto o abdômen trabalha.", warn:true,
    items:[
      {warm:true, name:"Elástico nas 3 direções", tags:["aquecimento","fisio"], sets:2, reps:"10 cada direção", rest:0, yt:V.elastico3dir, u:"round",
       cues:["Elástico no tornozelo, apoio firme, abdômen contraído","Lado (glúteo médio) → frente (flexor) → trás (glúteo + posterior)","Sem descanso entre as direções"],
       why:"Prescrito pelo fisio. É o que mantém o joelho seguro. Não pular."},
      {n:1, name:"Tri-set · Agachamento + Supra corda + Infra", tags:["perna","abs"], care:"Perna: RPE ≤7, sem falha", sets:3, reps:"12 · 20 · 15", rest:75,
       parts:[
         {l:"A", name:"Agachamento (pouco peso)", sub:"Sem passar do paralelo · 12", yt:V.agacho},
         {l:"B", name:"Abdominal supra na corda (polia)", sub:"Reto superior · 20", yt:V.supraCorda},
         {l:"C", name:"Abdominal infra · elevação de pernas", sub:"Reto inferior · 15", yt:V.infra, u:"corpo"}
       ],
       cues:["Agachamento: 40–50% do pré-cirurgia, descer 2s, joelho alinhado à ponta do pé, NÃO valgizar","Supra corda: ajoelhado, flexionar o tronco, expirar forte na contração","Infra: deitado, lombar colada no chão, subir as pernas e tirar o quadril do chão no fim. Descer devagar sem encostar os pés"],
       why:"A perna descansa enquanto DOIS abs trabalham. Infra no lugar do canivete, que já está na Ficha A."},
      {n:2, name:"Tri-set · Pélvica + Russian twist + Prancha lateral", tags:["glúteo","abs"], sets:3, reps:"15 · 20 · 45s", rest:75,
       parts:[
         {l:"A", name:"Elevação pélvica na máquina", sub:"Glúteo, seguro pro joelho · 15", yt:V.pelvicaMaq},
         {l:"B", name:"Russian twist", sub:"Oblíquos · 20 (10 por lado)", yt:V.russian},
         {l:"C", name:"Prancha lateral", sub:"45s cada lado, alternando por série", yt:V.pranchaLat, u:"seg"}
       ],
       cues:["Pélvica: empurrar com os calcanhares, contrair o glúteo 2s no topo","Twist: tronco a 45°, pés no ar, rotacionar com halter ou anilha","Prancha lateral: quadril ALTO, corpo em linha reta"],
       why:"Pélvica é o rei do glúteo com mínimo estresse no joelho. A prancha lateral veio da antiga B: core anti-rotação."},
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
    volume:[["Perna",18],["Abs",12],["Total",30]],
    note:"Perna ~1,7x por semana, mesmo bloco de sempre. ~9 séries de carga direta no joelho por sessão (agachamento, extensora, flexora); o resto é quadril e tornozelo. Progredir só com todas as reps em RPE ≤7 e zero desconforto."}
};

window.GB = { prefix:'gb2_', fichas:FICHAS, ciclo:CICLO, rules:RULES };
