/* Ficha Homero · Full Body 3x/semana · avançado · base Laércio Refundini · ver docs/refundini/.
 * Esquema dos campos: ver CLAUDE.md. Vídeos de execução: videos.js (V.*).
 * lr = Laércio COMENTANDO o exercício (start = segundo em que ele começa a falar dele). */
const LR = { peito:"QAEr4jvDFD4", melhores7:"O-lc14USdHg", puxar:"Fj5tD6qgNDo", ombro:"Xq7SgSwiYeI", melhores3:"yLTyV6NGrrU", bicepsLargo:"zRBWM0MsViA",
  posterior:"9DK3AyZWllg", agacho:"vPCsDfkMa3o", gluteo:"DfoqpAwabWY", extensora:"I_uBK4DDflU", legpress:"adPY6cd4h58", panturrilha:"emujvqD_Pq8",
  lateralCabo:"wGsKrK0bhps", marteloCorda:"S0FvPUzOceY" };

const AQ_MANGUITO = {warm:true, name:"5 min de cardio leve + manguito", tags:["aquecimento","ombro"], sets:2, reps:"15–20", rest:0, yt:V.manguito,
  cues:["Antes: 5 min de elíptico ou bike em ritmo leve, só pra aquecer o corpo","Manguito: cotovelo a 90° colado ao corpo, elástico ou halter leve, rotação externa","Só acordar o manguito, longe da fadiga. Sem descanso entre lados","As 2 séries leves do 1º exercício estão no card dele (A1 e A2)"],
  why:"Obrigatório com histórico de lesão no ombro. Refundini: aquecer o manguito sem fatigar, senão o deltoide anterior rouba o peito."};

const RULES = `<details class="rules" id="rules">
  <summary>Regras da ficha · Refundini + ombro<span class="chev">▾</span></summary>
  <table>
    <tr><td>Intensidade</td><td>Séries iniciais param a 1–2 reps da falha. <b>A última série de cada exercício vai até a falha</b>, técnica limpa. Em agachamento e stiff, falha é “técnica quebrou”, não desabar. Forçadas: só na última série do último exercício do dia, se quiser.</td></tr>
    <tr><td>Ombro</td><td><b>Nada acima da cabeça com carga</b> (sem desenvolvimento). Halteres no lugar de barra nos presses. Descer só até o ombro permitir. Doeu → encurta amplitude ou troca pra máquina/cross. Anterior fica com o trabalho indireto dos presses (regra dele: anterior já trabalha em peito).</td></tr>
    <tr><td>Reps</td><td>Faixa é guia. Pesado 6–10 · intermediário 8–12 · isoladores 10–15 · panturrilha 10–20. Fechou o topo em todas as séries → sobe carga na próxima.</td></tr>
    <tr><td>Descanso</td><td>Pesado 2–3 min · perna com carga 2 min · intermediário 1m30 · isolador 1 min. FC ainda alta? Espera mais.</td></tr>
    <tr><td>Cadência</td><td>1:1 controlada, “conduza o peso”. Nunca deixa o peso encaixar: não fecha até relaxar, não desce a lateral até a coxa, não trava o cotovelo.</td></tr>
    <tr><td>Ordem</td><td>Pesado do dia primeiro. Posterior de coxa antes do quadríceps (exceto na B, onde quadríceps é o pesado). Isoladores no fim.</td></tr>
    <tr><td>Ciclo</td><td>Sem 1–2: RIR 1–2 em tudo, aprender cargas. Sem 3–4: falha na última série. Sem 5–7: +1 série em lateral, bíceps, tríceps e deltoide posterior. Sem 8: regenerativa (metade das séries, −10% carga).</td></tr>
  </table>
  <div class="foot">Volume semanal: peito 12 · quadríceps 11 · posterior 11 · costas 10 · lateral 9 · glúteo 7 · bíceps 6 · tríceps 6 · panturrilha 8. Método e fontes: <a href="https://github.com/leoborja/gym-fichas/blob/main/docs/refundini/METODO.md">METODO.md</a> · <a href="https://github.com/leoborja/gym-fichas/blob/main/docs/refundini/FICHA-FULLBODY-3x.md">FICHA-FULLBODY-3x.md</a></div>
</details>`;

const FICHAS = {
  a:{tab:"Peito pesado", title:"Full Body · peito pesado", sub:"Segunda", sets:28, min:62,
    brief:"<strong>Pesado do dia: supino reto com halteres.</strong> Posterior antes do quadríceps. Última série de cada exercício na falha. Manguito antes de tudo.",
    items:[
      AQ_MANGUITO,
      {block:"Pesado do dia"},
      {n:1, approach:true, name:"Supino reto com halteres", tags:["peito","médio"], tech:"Última série na falha", care:"Ombro: descer só até onde permitir", sets:4, reps:"6–10", rest:150, yt:V.supinoHalter, lr:{yt:LR.melhores7, start:47},
       cues:["Escápulas fechadas, pés firmes, halteres na linha do peito","Descer até o ombro “avisar”, nunca além; cotovelo um pouco mais perto do corpo se incomodar","Subir sem bater os halteres no topo: o peito não relaxa","A1 e A2: 30% e 50% da carga, longe da falha, só pra acordar o movimento","Séries 1–3 a 1–2 reps da falha; a 4ª até a falha"],
       why:"Nº 1 da lista dele de peito e o substituto declarado do supino com barra: mais amplitude, encurta mais, conforto articular. Com ombro lesionado, o halter deixa você ajustar o ângulo do cotovelo."},
      {block:"Perna · posterior primeiro"},
      {n:2, name:"Cadeira flexora bilateral", tags:["posterior","alongado"], tech:"Última série na falha", sets:4, reps:"10–12", rest:90, yt:V.cadFlexora, lr:{yt:LR.posterior, start:115},
       cues:["Ponta do pé puxada pra cima","Alongar bem no topo, controlar a volta em 1:1","Não deixar o quadril sair do banco"],
       why:"Pra ele a cadeira flexora ganha da mesa flexora em hipertrofia porque trabalha o posterior alongado. Posterior vem antes do quadríceps e com o mesmo volume."},
      {n:3, name:"Agachamento livre com barra", tags:["quadríceps","glúteo","médio · profundo"], tech:"Última série na falha técnica", sets:4, reps:"6–10", rest:150, yt:V.agacho, lr:{yt:LR.agacho, start:15},
       cues:["Pés na posição natural do salto, joelho apontando pro pé","Barra nos trapézios, cotovelos pro chão, peso na sola inteira","Descer o máximo sem arredondar a lombar; joelho pode passar a ponta do pé","Subir quadril e tronco juntos, leve flexão no topo"],
       why:"O exercício de quadríceps que ele mais defende. Tronco estável → mais carga → mais hipertrofia. Amplitude máxima sem comprometer a lombar."},
      {block:"Superiores"},
      {n:4, name:"Remada máquina com apoio de peito · pegada aberta", tags:["costas","meio · romboide"], tech:"Última série na falha", sets:3, reps:"8–10", rest:90, yt:V.remadaMaq, lr:{yt:LR.puxar, start:257},
       cues:["Peito apoiado, pegada pronada e aberta","Cotovelo pra trás e pra fora, apertar a escápula 1s","Subir o peito no fim da remada"],
       why:"O exercício de “profundidade” das costas no treino de puxar dele: meio das costas, senão fica largo sem espessura. Com apoio, a lombar sai da equação."},
      {n:5, name:"Elevação lateral com halteres", tags:["deltoide lateral","torque no topo"], tech:"Última série na falha", sets:3, reps:"10–15", rest:60, yt:V.lateralHalter, lr:{yt:LR.ombro, start:127},
       cues:["Subir até a linha do ombro, sem balançar o corpo","Não descer até a coxa: mantém tensão embaixo","Mindinho levemente pra cima; se o ombro reclamar, tronco um pouco à frente"],
       why:"Lateral é a prioridade nº 1 de ombro pra ele, porque não trabalha em peito nem em costas. Sem desenvolvimento na ficha, é aqui que o ombro cresce."},
      {n:6, name:"Rosca 45° em banco inclinado", tags:["bíceps","alongado"], tech:"Última série na falha", sets:3, reps:"10–12", rest:60, yt:V.rosca45, lr:{yt:LR.melhores3, start:236},
       cues:["Banco a 45°, braço bem pra trás pra alongar","Cotovelo parado, não vem à frente","Se o ombro reclamar, sobe um pouco o banco"],
       why:"A rosca que ele mais elogia: “melhor segundo a ciência”, pelo alongamento. Único estudo que ele cita no lote: 45° > Scott."},
      {n:7, name:"Crucifixo inverso na máquina", tags:["deltoide posterior"], tech:"Última série na falha", sets:3, reps:"12–15", rest:60, yt:V.crucInverso, lr:{yt:LR.ombro, start:71},
       cues:["Apoiar só o abdômen, não o peito","Não arquear as costas, senão o dorsal entra","Abrir até a linha do ombro, controlar a volta"],
       why:"Ele fecha o dia de ombro e o de costas com posterior em máquina: alavanca constante, isola sem o dorsal roubar. Posterior forte também estabiliza o ombro."},
      {n:8, name:"Panturrilha em pé", tags:["panturrilha","gastrocnêmio"], sets:4, reps:"10–20", rest:60, yt:V.pantPe, lr:{yt:LR.panturrilha},
       cues:["Alongar bem embaixo, 1s de contração no topo","Controlada, sem quicar","Unilateral quando ficar fácil"],
       why:"Refundini: 4 séries de 10–20 controladas, não precisa de reps altíssimas."}
    ],
    volume:[["Peito",4],["Posterior de coxa",4],["Quadríceps",4],["Costas (meio)",3],["Deltoide lateral",3],["Bíceps",3],["Deltoide posterior",3],["Panturrilha",4],["Total",28]],
    note:"Cada músculo recebe 1 exercício por sessão: dose baixa recupera em 24–48 h (regra dele). Os pesados do dia levam 4 séries porque o nível é avançado."},

  b:{tab:"Costas pesada", title:"Full Body · costas pesada", sub:"Quarta", sets:29, min:62,
    brief:"<strong>Pesado do dia: puxada alta.</strong> Stiff antes do leg press. Peito hoje é pico de contração no crucifixo máquina. Tríceps na polia deitado, nada acima da cabeça.",
    items:[
      AQ_MANGUITO,
      {block:"Pesado do dia"},
      {n:1, approach:true, name:"Puxada alta pronada", tags:["costas","médio · pesado"], tech:"Última série na falha", sets:4, reps:"6–10", rest:150, yt:V.puxadaAlta, lr:{yt:LR.puxar, start:41},
       cues:["A1 e A2: 30% e 50% da carga, longe da falha","Cotovelos pra baixo, subir o peito no fim da puxada","Controlar a subida, não soltar","Pegada um pouco mais aberta que o ombro"],
       why:"Ele abre o treino de puxar com puxada alta pesada em 6–10 reps: tensão mecânica no dorsal em comprimento médio."},
      {block:"Perna · posterior primeiro"},
      {n:2, name:"Stiff com barra", tags:["posterior","glúteo","alongado máximo"], tech:"Última série na falha técnica", sets:4, reps:"8–10", rest:120, yt:V.stiff, lr:{yt:LR.posterior, start:118},
       cues:["Joelho quase estendido, quadril vai pra trás","Descer até sentir o posterior alongar, lombar neutra o tempo todo","Barra rente às pernas, subir contraindo glúteo"],
       why:"Stiff é o exercício de posterior alongado que ele cita ao lado da cadeira flexora. “Quanto mais alonga, mais hipertrofia.”"},
      {n:3, name:"Leg press 45°", tags:["quadríceps","alongado"], tech:"Última série na falha", sets:4, reps:"8–12", rest:120, yt:V.legpress, lr:{yt:LR.legpress},
       cues:["Pés na largura do agachamento, apoiados por inteiro","Descer o máximo sem o quadril sair do banco","Não travar o joelho no topo"],
       why:"Segundo estímulo pesado de quadríceps da semana, em alongamento e com o tronco estável. Ele tem vídeo só sobre a execução."},
      {block:"Superiores"},
      {n:4, name:"Crucifixo na máquina (peck deck)", tags:["peito","encurtado · pico"], tech:"Última série na falha", sets:4, reps:"10–12", rest:90, yt:V.peckDeck, lr:{yt:LR.peito, start:83},
       cues:["Apertar mão contra mão no fim, 1s","Não relaxar no topo: o peso nunca “encaixa”","Abrir só até onde o ombro permitir"],
       why:"“O melhor exercício de peito” pra ele: alavanca constante, alonga e encurta muito, impossível perder tensão. Amplitude de abertura é você quem manda."},
      {n:5, name:"Elevação lateral no cabo baixo · diagonal", tags:["deltoide lateral","torque no início"], tech:"Última série na falha", sets:3, reps:"12–15", rest:60, yt:V.lateralCabo, lr:{yt:LR.lateralCabo},
       cues:["Cabo passando por trás do corpo, subir em diagonal","Tensão desde o início do movimento","Não descer até relaxar"],
       why:"Segunda faixa de torque do lateral (início do movimento), que o halter não cobre. Ele monta lateral em 3 exercícios por isso."},
      {n:6, name:"Tríceps testa na polia · deitado", tags:["tríceps","cabeça longa"], tech:"Última série na falha", care:"Ombro: no lugar do francês acima da cabeça", sets:3, reps:"10–12", rest:60, yt:V.testaPolia, lr:{yt:LR.melhores3, start:364},
       cues:["Deitado no banco, polia baixa atrás da cabeça, barra ou corda","Cotovelo apontando pro teto, descer atrás da testa","Estender sem travar"],
       why:"Ele troca o testa com barra livre pela polia (“barra livre machuca o cotovelo”). Aqui também substitui o francês, que exigiria o braço acima da cabeça."},
      {n:7, name:"Panturrilha sentada", tags:["panturrilha","sóleo"], sets:4, reps:"10–15", rest:60, yt:V.pantSentada, lr:{yt:LR.panturrilha},
       cues:["Alongar bem embaixo, 1s no topo","Controlada"],
       why:"Sentada pega o sóleo, que a em pé não pega. Fecha 8 séries de panturrilha na semana."},
      {n:8, name:"Core · Prancha lateral ou canivete", tags:["core"], sets:3, reps:"45s ou 15", rest:45, yt:V.pranchaLat, u:"corpo",
       cues:["Prancha lateral: quadril alto, corpo em linha, alternar os lados","Canivete: pernas e tronco sobem juntos, sem impulso"],
       why:"Não vem do Refundini (ele quase não fala de abdômen). Opcional."}
    ],
    volume:[["Costas",4],["Posterior de coxa",4],["Quadríceps",4],["Peito",4],["Deltoide lateral",3],["Tríceps",3],["Panturrilha",4],["Core",3],["Total",29]],
    note:"Stiff e leg press em sequência: posterior alongado antes, quadríceps alongado depois. Sem nada acima da cabeça nesta sessão."},

  c:{tab:"Perna pesada", title:"Full Body · perna pesada", sub:"Sexta", sets:29, min:62,
    brief:"<strong>Pesado do dia: glúteo e posterior.</strong> Hip thrust e step-down, os 2 exercícios de glúteo que ele endossa. Peito superior a 30° com halteres, remada “do Lalá”, lateral na máquina fecha 9 séries na semana.",
    items:[
      AQ_MANGUITO,
      {block:"Pesado do dia · glúteo e posterior"},
      {n:1, approach:true, name:"Elevação pélvica com barra (hip thrust)", tags:["glúteo","encurtado"], tech:"Última série na falha", sets:4, reps:"8–12", rest:120, yt:V.hipThrust, lr:{yt:LR.gluteo, start:39},
       cues:["A1 e A2: 30% e 50% da carga, longe da falha","Costas apoiadas no banco na altura da escápula","Empurrar com o calcanhar, contrair o glúteo 2s no topo","Queixo recolhido, costela pra baixo, sem hiperestender a lombar"],
       why:"Um dos 2 exercícios de glúteo que ele endossa (react ao Bret Contreras): o de posição encurtada. Hip thrust convencional antes de variar."},
      {n:2, name:"Step-down no caixote", tags:["glúteo","alongado"], tech:"Última série na falha", sets:3, reps:"10–12 cada", rest:90, yt:V.stepDown, lr:{yt:LR.gluteo, start:271},
       cues:["Em pé no caixote, uma perna no ar, descer o pé livre até quase tocar o chão","Tronco inclinado à frente, joelho da perna de apoio segue o pé","Halter na mão oposta à perna de apoio"],
       why:"O outro exercício de glúteo endossado: o de posição alongada, glúteo inferior. Ele condena agachamento e terra como exercício PRINCIPAL de glúteo."},
      {n:3, name:"Flexora em pé unilateral", tags:["posterior","médio"], tech:"Última série na falha", sets:3, reps:"10–12 cada", rest:90, yt:V.flexoraPe, lr:{yt:LR.posterior, start:560},
       cues:["Quadril encaixado, tronco parado","Subir 1s, descer 2s controlando"],
       why:"Fecha os 3 comprimentos do posterior na semana: alongado (cadeira, stiff) e médio (em pé). Ele: posterior é “delicado”, técnica antes de carga."},
      {n:4, name:"Cadeira extensora", tags:["quadríceps","encurtado"], tech:"Última série na falha", sets:3, reps:"12–15", rest:60, yt:V.extensora, lr:{yt:LR.extensora},
       cues:["Subir 1s, segurar 1s no topo, descer 2s","Costas apoiadas, quadril fixo","Não travar com impulso"],
       why:"Terceiro estímulo de quadríceps, em posição encurtada (pico). Ele tem vídeo só sobre a extensora."},
      {block:"Superiores"},
      {n:5, name:"Supino inclinado 30° com halteres", tags:["peito superior","médio"], tech:"Última série na falha", care:"Ombro: descer só até onde permitir", sets:4, reps:"8–10", rest:120, yt:V.supinoHalterIncl, lr:{yt:LR.peito, start:381},
       cues:["Banco a 30°, não 45°","Halteres na linha do peito alto, cotovelo um pouco fechado","Descer até o ombro permitir, subir sem bater os halteres"],
       why:"Único exercício de peitoral superior que ele prescreve: “30° > 45°”. Halteres pra poder ajustar o ângulo do cotovelo ao ombro."},
      {n:6, name:"Remada unilateral na polia baixa · “do Lalá”", tags:["costas","dorsal · encurtado"], tech:"Última série na falha", sets:3, reps:"10–12 cada", rest:90, yt:V.remadaUni, lr:{yt:LR.puxar, start:121},
       cues:["Puxar a mão em direção ao quadril, não ao peito","Cotovelo perto do corpo, tronco parado","Alongar bem no início, sem girar o tronco"],
       why:"A remada que ele chama de “do Lalá”: a mão indo ao quadril encurta a dorsal e tira bíceps e trapézio da jogada."},
      {n:7, name:"Elevação lateral na máquina", tags:["deltoide lateral","torque constante"], tech:"Última série na falha", sets:3, reps:"12–15", rest:60, yt:V.lateralMaq, lr:{yt:LR.ombro, start:84},
       cues:["Cotovelo na almofada, subir até a linha do ombro","Não deixar o braço cair até relaxar","Postura encaixada"],
       why:"“A melhor de todas” pra ele: vetor circular, torque constante. Fecha 9 séries de lateral na semana em 3 faixas."},
      {n:8, name:"Superset · Tríceps corda + Rosca martelo corda", tags:["tríceps","braquiorradial"], tech:"Última série na falha", sets:3, reps:"12–15 + 10–12", rest:60,
       parts:[
         {l:"A", name:"Tríceps corda na polia alta", sub:"Encurtado · abrir as mãos embaixo", yt:V.tricepsCorda, lr:{yt:LR.melhores3, start:348}},
         {l:"B", name:"Rosca martelo com corda na polia baixa", sub:"Braquiorradial · mão “pra fora” no fim", yt:V.marteloCorda, lr:{yt:LR.marteloCorda}}
       ],
       cues:["Corda no lugar da barra nos dois (troca explícita dele)","Tríceps: cotovelo parado, abrir as mãos no fim","Martelo: cotovelo colado, girar a mão pra fora no topo"],
       why:"Corda em vez de barra no pulley é troca dele. Martelo com corda ataca o braquiorradial, o “bíceps largo”."}
    ],
    volume:[["Glúteo",7],["Posterior de coxa",3],["Quadríceps",3],["Peito superior",4],["Costas (dorsal)",3],["Deltoide lateral",3],["Tríceps + bíceps",6],["Total",29]],
    note:"Semana fecha com peito 12, quadríceps 11, posterior 11, costas 10, lateral 9. Ciclo 2: trocar variantes (“o melhor treino é o que você ainda não fez”)."}
};


const CICLO = { nome:"Ciclo 1", semana:"1/8", gerada:"2026-09-08" };
window.GB = { prefix:'fb_', fichas:FICHAS, ciclo:CICLO, rules:RULES, altLabel:'Laércio explica' };
