/* Fichas do Leo · A–E · mesociclo de Acumulação.
 * Esquema dos campos: ver CLAUDE.md. Vídeos: videos.js (V.*). */
const CICLO = { nome:"Acumulação", semana:"1/5", gerada:"2026-07-03", revisada:"2026-09-08" };

/* bloco de perna compartilhado por C e E */
const PERNA_AQ = {warm:true, name:"Elástico nas 3 direções", tags:["aquecimento","fisio"], sets:2, reps:"10 cada direção", rest:0, yt:V.elastico3dir, u:"round",
  cues:["Elástico no tornozelo, apoio firme, abdômen contraído","Lado (glúteo médio) → frente (flexor) → trás (glúteo + posterior)","Sem descanso entre as direções"],
  why:"Prescrito pelo fisio. É o que mantém o joelho seguro. Não pular."};
const PERNA_3 = {n:3, name:"Superset · Extensora unilateral + Panturrilha em pé", tags:["quadríceps","panturrilha"], sets:3, reps:"12 + 15", rest:45,
  parts:[
    {l:"A", name:"Cadeira extensora unilateral", sub:"12 cada perna · fisio", yt:V.extensoraUni},
    {l:"B", name:"Panturrilha em pé", sub:"Gastrocnêmio · 15", yt:V.pantPe}
  ],
  cues:["Extensora: uma perna por vez, subir 2s, segurar 1s, descer 2s. NÃO travar o joelho","Panturrilha: alongamento máximo embaixo, contração 1s no topo, ROM completo"],
  why:"A panturrilha não estressa o joelho, então serve de descanso pro joelho entre as séries de extensora."};
const PERNA_4 = {n:4, name:"Superset · Flexora unilateral + Abdutora", tags:["posterior de coxa","glúteo médio"], care:"Abdutora pendente de OK do fisio", sets:3, reps:"12 + 15", rest:45,
  parts:[
    {l:"A", name:"Cadeira flexora unilateral", sub:"12 cada perna · fisio", yt:V.flexoraUni},
    {l:"B", name:"Cadeira abdutora", sub:"15 · ou elástico lateral", yt:V.abdutora}
  ],
  cues:["Flexora: uma perna por vez, subir 2s, segurar 1s, descer 2s. NÃO travar o joelho","Abdutora: tronco levemente à frente, abrir contra a resistência, contrair o glúteo médio no fim"],
  why:"Abdutora é movimento de quadril, não estressa o joelho. Enquanto o fisio não liberar, usar o elástico de abertura lateral no lugar."};

const FICHAS = {
  a:{tab:"Peito · Ombro", title:"Peito superior + Ombro", sub:"Pesado", sets:31, min:38,
    brief:"<strong>Regra do dia:</strong> completar TODO o peito antes de tocar em ombro. Press no supino sentado no cross (coluna apoiada, zero lombar). Lateral é o alvo 3D da semana.",
    items:[
      {warm:true, name:"Manguito rotador externo", tags:["aquecimento","ombro"], sets:3, reps:"15", rest:0, yt:V.manguito,
       cues:["Cotovelo a 90° colado ao corpo","Halter leve ou elástico, rotação externa","Sem descanso entre lados"],
       why:"Não é treino, é seguro de vida do ombro. Pula e paga com lesão."},
      {block:"Bloco peito · superior"},
      {n:1, name:"Supino sentado no cross · inclinado", tags:["peito superior"], tech:"Rest-pause na 4ª", sets:4, reps:"8–10", rest:90, yt:V.crossPressIncl,
       cues:["Banco a 30–40°, cabos na altura do peito alto","Empurrar à frente/cima juntando na linha do peito","Descer em 3s, explodir na subida","4ª série: 8 reps → 15s → +5 reps mesmo peso"],
       why:"Composto principal do dia, sem superset. Tensão constante, coluna apoiada, zero lombar. Bateu 10 limpas nas 4 séries → sobe a carga."},
      {n:2, name:"Superset · Crucifixo inclinado + Supino cross reto", tags:["peito superior","peito médio"], sets:3, reps:"10–12", rest:75,
       parts:[
         {l:"A", name:"Crucifixo inclinado com halteres", sub:"Estica · fase alongada", yt:V.crucIncl},
         {l:"B", name:"Supino sentado no cross · reto", sub:"Empurra · ângulo reto", yt:V.crossPressReto}
       ],
       cues:["Crucifixo: banco 30°, abertura ampla, cotovelos levemente flexionados, squeeze 1–2s no topo","Cross reto: banco plano, cabos na altura do peito, descer 2–3s, explodir"],
       why:"Dois padrões diferentes, não dois flys: um estica, o outro empurra num ângulo novo. Isso arredonda o peitoral inteiro."},
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
       why:"As duas cabeças que os pressings não pegam. Anterior já foi martelado pelos 3 presses."},
      {n:5, name:"Superset · Lateral inclinada + Posterior curvado", tags:["deltóide medial","posterior"], sets:3, reps:"12 + 12", rest:45,
       parts:[
         {l:"A", name:"Elevação lateral inclinada (leaning)", sub:"Isola o lateral puro", yt:V.lateralLeaning},
         {l:"B", name:"Elevação posterior curvado", sub:"Fecha o posterior", yt:V.posteriorCurvado}
       ],
       cues:["Apoiar num poste, inclinar o corpo, halter na mão de fora, tensão desde o início","Curvado: tronco à frente, abrir pros lados, squeeze 2s no topo"],
       why:"2ª dose de medial + posterior, ângulos novos. Lateral segue prioridade."}
    ],
    volume:[["Peito (viés superior)",13],["Ombro",15],["Abs",3],["Total",31]],
    note:"Lateral direto: 6 séries aqui + 3 na D. Peito: press + estica + pullover = peito inteiro, viés superior."},

  b:{tab:"Costas · Tríceps", title:"Costas + Tríceps", sub:"Denso", sets:29, min:40,
    brief:"<strong>Regra do dia:</strong> TODA a costas primeiro (dorsal fresco), depois TODO o tríceps. As puxadas usam bíceps, então o tríceps chega inteiro pro bloco dele. Sem ping-pong entre estações.",
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
      {block:"Bloco tríceps · tudo depois"},
      {n:4, name:"Tri-set · Testa EZ + Corda + Mergulho", tags:["cabeça longa","lateral","todas"], sets:3, reps:"10 · 15 · máx", rest:75,
       parts:[
         {l:"A", name:"Tríceps testa barra EZ", sub:"Cabeça longa · 10", yt:V.testaEZ},
         {l:"B", name:"Tríceps pulley corda", sub:"Lateral/medial · 15", yt:V.tricepsCorda},
         {l:"C", name:"Mergulho no banco", sub:"Todas · até a falha", yt:V.mergulhoBanco, u:"reps"}
       ],
       cues:["Testa: descer ATRÁS da cabeça, não na testa","Corda: abrir as mãos embaixo","Mergulho: mãos no banco atrás, pés à frente, cotovelo a 90°, até a falha"],
       why:"As 3 cabeças em sequência: composto pesado → isolador → peso corporal até a falha."},
      {n:5, name:"Superset · Coice + Prancha lateral", tags:["tríceps","core"], tech:"Drop set no coice (3ª)", sets:3, reps:"12 + 45–60s", rest:45,
       parts:[
         {l:"A", name:"Tríceps coice com halter", sub:"12 cada braço", yt:V.coice},
         {l:"B", name:"Prancha lateral", sub:"45–60s cada lado, ou até a falha", yt:V.pranchaLat, u:"seg"}
       ],
       cues:["Coice: cotovelo alinhado ao corpo, estender pra trás, contração máxima no topo","3ª série do coice: 12 → −30% → falha","Prancha: quadril ALTO, corpo em linha, alternar os lados a cada série"],
       why:"Áreas diferentes, dá pra fazer junto sem interferência e ainda adianta o treino."}
    ],
    volume:[["Costas",14],["Tríceps",12],["Abs",3],["Total",29]],
    note:"Ordem: dorsal fresco primeiro (largura + espessura + finisher), depois todo o tríceps."},

  c:{tab:"Perna · Bíceps", title:"Perna + Bíceps", sub:"Retomada", sets:30, min:37,
    brief:"<strong>Retomada pós-op joelho.</strong> Carga conservadora (40–50%), RPE máximo 7, sem falha e sem técnica intensificadora na perna. Qualquer desconforto no joelho → parar a série e reduzir. O bloco de perna é idêntico ao da Ficha E.", warn:true,
    items:[
      PERNA_AQ,
      {n:1, name:"Tri-set · Agachamento + Rosca EZ + Martelo", tags:["perna","bíceps"], care:"Perna: RPE ≤7, sem falha", sets:3, reps:"12 · 10 · 12", rest:75,
       parts:[
         {l:"A", name:"Agachamento (pouco peso)", sub:"Sem passar do paralelo · 12", yt:V.agacho},
         {l:"B", name:"Rosca direta barra EZ", sub:"Bíceps · 10", yt:V.roscaEZ},
         {l:"C", name:"Rosca martelo", sub:"Braquial, espessura · 12", yt:V.martelo}
       ],
       cues:["Agachamento: 40–50% do pré-cirurgia, descer 2s, joelho alinhado à ponta do pé, NÃO valgizar","Rosca EZ: cotovelos colados, sem balançar","Martelo: pegada neutra. “Braço grosso é rosca martelo”"],
       why:"A perna descansa enquanto DOIS bíceps trabalham: fadiga máxima no braço, zero fadiga cumulativa no joelho."},
      {n:2, name:"Tri-set · Pélvica + Alternada + Scott", tags:["glúteo","bíceps"], sets:3, reps:"15 · 12 · 10", rest:75,
       parts:[
         {l:"A", name:"Elevação pélvica na máquina", sub:"Glúteo, seguro pro joelho · 15", yt:V.pelvicaMaq},
         {l:"B", name:"Rosca alternada com halteres", sub:"12 (6 por braço)", yt:V.alternada},
         {l:"C", name:"Rosca scott barra EZ", sub:"Pico · 10", yt:V.scott}
       ],
       cues:["Pélvica: empurrar com os calcanhares, contrair o glúteo 2s no topo","Alternada: supinar no topo (girar o mindinho pra fora)","Scott: cotovelo apoiado, descer com controle, sem trapaça"],
       why:"Pélvica é o rei do glúteo com mínimo estresse no joelho."},
      PERNA_3,
      PERNA_4
    ],
    volume:[["Perna",18],["Bíceps",12],["Total",30]],
    note:"~9 séries de carga direta no joelho (agachamento, extensora, flexora). O resto é quadril/tornozelo. Progredir só com todas as reps em RPE ≤7 e zero desconforto."},

  d:{tab:"Peito · Ombro", title:"Peito superior + Ombro", sub:"2º dia forte", sets:29, min:40,
    brief:"<strong>Não é o dia leve.</strong> É o 2º ataque pesado da semana em peito (P0) e ombro (P1): carga de verdade, perto da falha, técnicas nos principais. Ângulos diferentes da Ficha A pra bater o músculo de outro jeito.",
    items:[
      {warm:true, name:"Manguito rotador externo", tags:["aquecimento","ombro"], sets:3, reps:"15", rest:0, yt:V.manguito,
       cues:["Cotovelo a 90° colado ao corpo","Rotação externa leve","Sem descanso entre lados"],
       why:"Obrigatório antes de peito/ombro."},
      {block:"Bloco peito · superior"},
      {n:1, name:"Supino sentado no cross · inclinado", tags:["peito superior"], tech:"Rest-pause na 4ª", sets:4, reps:"8–10", rest:90, yt:V.crossPressIncl,
       cues:["Banco a 30–40°, cabos na altura do peito alto","Empurrar à frente/cima, descer 3s, explodir","4ª série: 8 reps → 15s → +5 reps mesmo peso"],
       why:"Mesmo press da Ficha A, aqui como 2ª dose pesada da semana. Coluna apoiada."},
      {n:2, name:"Superset · Cross reto + Crossover polia baixa", tags:["peito médio","peito superior"], sets:3, reps:"10 + 15", rest:75,
       parts:[
         {l:"A", name:"Supino sentado no cross · reto", sub:"Empurra pesado · 10", yt:V.crossPressReto},
         {l:"B", name:"Crossover polia baixa", sub:"Aperta, superior contraído · 15", yt:V.crossoverBaixo}
       ],
       cues:["Cross reto: banco plano, descer 2–3s, explodir","Crossover baixo: subir cruzando na frente até a altura do queixo, squeeze 2s"],
       why:"Press + cabo: padrões diferentes, curvas de resistência opostas."},
      {n:3, name:"Superset · Pullover + Canivete", tags:["peito","abs","finisher"], sets:3, reps:"12 + 15", rest:45,
       parts:[
         {l:"A", name:"Pullover com halter", sub:"Caixa torácica + serrátil · 12", yt:V.pullover},
         {l:"B", name:"Canivete", sub:"Reto abdominal · 15", yt:V.canivete, u:"corpo"}
       ],
       cues:["Pullover: perpendicular no banco, quadril baixo, halter bem atrás da cabeça, voltar contraindo o peito","Canivete: pernas e tronco sobem juntos"],
       why:"O Arnold sagrado fecha o peito e já adianta o abs."},
      {block:"Bloco ombro"},
      {n:4, name:"Arnold press sentado", tags:["deltóide · 3 cabeças"], tech:"Drop set na 4ª", sets:4, reps:"8–10", rest:90, yt:V.arnold,
       cues:["Palmas começam viradas pra você, rotacionar durante a subida","Carga pesada, perto da falha","4ª série: 8–10 → −30% → falha"],
       why:"O único exercício que leva o nome dele. As 3 cabeças do deltóide de uma vez."},
      {n:5, name:"Superset · Lateral sentado + Posterior no cabo", tags:["deltóide medial","posterior"], sets:3, reps:"12 + 15", rest:60,
       parts:[
         {l:"A", name:"Elevação lateral sentado", sub:"Sem impulso do corpo · 12", yt:V.lateralSentado},
         {l:"B", name:"Elevação posterior no cabo (reverse)", sub:"Cabo cruzado · 15", yt:V.crucInversoCabo}
       ],
       cues:["Sentado elimina o impulso: isolamento puro do medial. Mindinho levemente pra cima","Cabo na altura do ombro, abrir pra trás, squeeze 2s"],
       why:"Medial + posterior, ângulos diferentes da Ficha A."},
      {n:6, name:"Elevação lateral cruzada no cabo", tags:["deltóide medial"], tech:"Drop set na 3ª", sets:3, reps:"12", rest:45, yt:V.lateralCruzadaCabo,
       cues:["Cabo baixo cruzando na frente do corpo","Elevar até o paralelo, tensão constante","3ª série: 12 → −30% → falha"],
       why:"Bombeamento final no ombro. Lateral direto: 6 séries aqui + 6 na A = ~12/semana."}
    ],
    volume:[["Peito (viés superior)",13],["Ombro",13],["Abs",3],["Total",29]],
    note:"2º dia forte: rest-pause no cross inclinado, drop set no Arnold e na lateral cruzada."},

  e:{tab:"Perna · Abs", title:"Perna + Abdômen", sub:"Retomada", sets:30, min:37,
    brief:"<strong>Retomada pós-op joelho.</strong> Bloco de perna IDÊNTICO ao da Ficha C: mesmos exercícios, séries, reps e carga. A diferença é só o parceiro: aqui a perna casa com abs. RPE máximo 7, sem falha.", warn:true,
    items:[
      PERNA_AQ,
      {n:1, name:"Tri-set · Agachamento + Supra corda + Canivete", tags:["perna","abs"], care:"Perna: RPE ≤7, sem falha", sets:3, reps:"12 · 20 · 15", rest:75,
       parts:[
         {l:"A", name:"Agachamento (pouco peso)", sub:"Sem passar do paralelo · 12", yt:V.agacho},
         {l:"B", name:"Abdominal supra na corda (polia)", sub:"Reto superior · 20", yt:V.supraCorda},
         {l:"C", name:"Canivete", sub:"Reto completo · 15", yt:V.canivete, u:"corpo"}
       ],
       cues:["Agachamento: idêntico à Ficha C. 40–50%, joelho alinhado, sem falha","Supra corda: ajoelhado, flexionar o tronco, expirar forte na contração","Canivete: pernas e tronco sobem juntos, sem impulso"],
       why:"A perna descansa enquanto DOIS abs trabalham. Abs intercalado desde o começo."},
      {n:2, name:"Tri-set · Pélvica + Russian twist + Prancha", tags:["glúteo","abs"], sets:3, reps:"15 · 20 · 30s", rest:75,
       parts:[
         {l:"A", name:"Elevação pélvica na máquina", sub:"Glúteo · 15", yt:V.pelvicaMaq},
         {l:"B", name:"Russian twist", sub:"Oblíquos · 20 (10 por lado)", yt:V.russian},
         {l:"C", name:"Prancha frontal", sub:"Core · 30s", yt:V.prancha, u:"seg"}
       ],
       cues:["Pélvica: empurrar com os calcanhares, contrair o glúteo 2s no topo","Twist: tronco a 45°, pés no ar, rotacionar com halter ou anilha","Prancha: corpo em linha reta, abdômen e glúteo contraídos"],
       why:"Mesma pélvica da Ficha C, mesma carga."},
      PERNA_3,
      PERNA_4
    ],
    volume:[["Perna",18],["Abs",12],["Total",30]],
    note:"Bloco de perna idêntico à Ficha C: mesma carga, mesma progressão. Perna 2x/semana no total."}
};

window.GB = { prefix:'gb2_', fichas:FICHAS, ciclo:CICLO, rules:null };
