/* Biblioteca de vídeos de EXECUÇÃO, por exercício. IDs do YouTube verificados via oEmbed em 2026-09-08.
 * Critério: clipe curto (ideal < 1 min), em português, mostrando a execução. Ver CLAUDE.md pra adicionar.
 * Buscar/verificar: python3 tools/yt.py "nome do exercício execução"   |   python3 tools/yt.py --verify ID ID ...
 */
const V = {
  /* aquecimento */
  manguito:"EcWRUlH63eg",            // Rotação externa com halter, cotovelo 90° · Bruno Teles · 0:28
  elastico3dir:"A5G5ddF9gCg",        // Abdução e extensão de quadril em pé · 0:22

  /* peito */
  crossPressIncl:"G20cqd_4goE",      // Supino inclinado sentado no cross over · Academia Target · 0:22
  crossPressReto:"nybEfmrz1Ro",      // Supino vertical no crossover sentado · Mayara Ramos · 0:16
  crucIncl:"RIfdP8Jfc-Q",            // Crucifixo inclinado com halter · Gabriel Rodrigues · 0:50
  crossoverBaixo:"QUcXXwxa6hE",      // Crucifixo na polia baixa · Miqueias Alves · 1:18
  pullover:"UicU0kXYKTI",            // Pullover com halter · MyTrainingPRO · 0:55
  supinoHalter:"tDxKGeY-hjQ",        // Supino reto com halteres (ficha Homero)
  supinoHalterIncl:"F4Q1g2z8MWM",    // Supino inclinado com halteres (ficha Homero)
  peckDeck:"FzCnfD0gOXo",            // Crucifixo máquina / peck deck (ficha Homero)

  /* ombro */
  desenvMaq:"aTnjvuuf_yo",           // Desenvolvimento na máquina · Janderson Belinato · 0:14
  arnold:"f-nxx3-xEE8",              // Arnold press sentado · 0:48
  lateralHalter:"W5hRdgwEoEA",       // Elevação lateral com halteres · MyTrainingPRO · 0:57
  lateralSentado:"YsfdRrrKKcc",      // Elevação lateral sentado · Bruno Rombaldi · 0:35
  lateralLeaning:"Qc3v4fAdv9c",      // Lateral inclinada apoiado no poste (lean away) · 0:26 · inglês
  lateralCruzadaCabo:"XZim1yp53kY",  // Elevação lateral cruzada no cross · Ederson Miranda · 0:19
  lateralCabo:"sKPJdvVvHuI",         // Elevação lateral no cabo, unilateral (ficha Homero)
  lateralMaq:"E9nwq___qow",          // Elevação lateral na máquina (ficha Homero)
  facepull:"On1ysBmSWrA",            // Face pull · PH Personal · 0:43
  posteriorCurvado:"HrL-KPhJ9r0",    // Posterior de ombro curvado com halteres · Clair José · 0:19
  crucInversoCabo:"IzPMAqlrjkA",     // Crucifixo inverso no crossover · koach Team · 0:42
  crucInverso:"5HDkxzxe400",         // Crucifixo inverso na máquina (ficha Homero)

  /* costas */
  puxadaAlta:"mPmfwbc_svw",          // Puxada alta frente pronada · Fernando Cantarelli · 0:40
  puxadaSupinada:"IFDUGxHRIKA",      // Puxada supinada pegada fechada · Treino Mestre · 0:53
  remadaTri:"2YebbYuuBJQ",           // Remada baixa com triângulo · Treino Mestre · 0:44
  remadaBarraPronada:"pfgEEiouvAs",  // Remada baixa pegada pronada aberta · Treino Mestre · 0:28
  remadaMaq:"QyvIEdEHzHc",           // Remada máquina com apoio de peito (ficha Homero)
  remadaUni:"xgYWtfMBRbc",           // Remada unilateral (ficha Homero)
  barraFixa:"NTn_iTC8d_Q",           // Barra fixa pegada aberta · 0:12

  /* tríceps */
  testaEZ:"_sX2nTDhE1s",             // Tríceps testa barra W · Atlas · 0:38
  testaPolia:"RE-MNWQOcSY",          // Tríceps testa na polia (ficha Homero)
  tricepsCorda:"KhK5HWJfsrQ",        // Pulley tríceps corda · Miqueias Alves · 1:15
  mergulhoBanco:"8eFABDEBH-Y",       // Mergulho no banco · Daly Barbosa · 0:21
  coice:"cVvnXnyZ5eU",               // Tríceps coice com halteres · Via Brasil Club · 0:45

  /* bíceps */
  roscaEZ:"0R7V2FXfFyQ",             // Rosca direta barra W · Via Brasil Club · 0:40
  martelo:"YrZ0qzBi-kk",             // Rosca martelo com halteres · Jonathan Augusto · 0:34
  marteloCorda:"pHfjOl6JUSg",        // Rosca martelo na corda (ficha Homero)
  alternada:"AuBN9_8Iihc",           // Rosca alternada · Laércio Refundini cortes · 1:05
  scott:"Kh4G5N48EO8",               // Rosca scott barra W · MyTrainingPRO · 0:46
  rosca45:"ioML_NZH16M",             // Rosca 45° banco inclinado (ficha Homero)

  /* perna */
  agacho:"DOU7aDli5a4",              // Agachamento livre · Junior De Lima · 0:57
  stiff:"4_O6alBQ4wY",               // Stiff com barra (ficha Homero)
  legpress:"waAxlYvtCcI",            // Leg press 45° (ficha Homero)
  pelvicaMaq:"DnHjZpt76NU",          // Elevação pélvica na máquina · Nei Farinazo · 0:15
  hipThrust:"6sTO9ejM-Ew",           // Hip thrust (ficha Homero)
  extensoraUni:"pL0DNBb_HlE",        // Cadeira extensora unilateral · Adrenalina Training · 0:30
  extensora:"el3oHblB5DM",           // Cadeira extensora bilateral (ficha Homero)
  flexoraUni:"jQszh3iuu3g",          // Cadeira flexora unilateral · 4personal · 0:14
  cadFlexora:"Zss6E3VU6X0",          // Cadeira flexora bilateral (ficha Homero)
  flexoraPe:"asgd2_1k7Yw",           // Flexora em pé (ficha Homero)
  abdutora:"e2gmqTG1OgQ",            // Cadeira abdutora · Leandro Twin · 1:14
  stepDown:"3sRrVvxwaUw",            // Step down (ficha Homero)
  pantPe:"of5Z7yj-HqY",              // Panturrilha em pé na máquina · Via Brasil Club · 0:54
  pantSentada:"1NBoneuGtQo",         // Panturrilha sentada (ficha Homero)

  /* abs / core */
  canivete:"yFKPFCnpFJs",            // Abdominal canivete · 4Nutrition · 0:15
  supraCorda:"7mUeDtB7nvM",          // Abdominal ajoelhado com corda na polia · Nei Farinazo · 0:17
  russian:"QxF3kDO74AA",             // Russian twist · Dicas do Salgueiro · 0:44
  prancha:"ty4jM83jKyE",             // Prancha frontal · Jr Vieira · 0:38
  pranchaLat:"2NjO5KrlVEM"           // Prancha lateral · Rodrigo Zago · 0:55
};
