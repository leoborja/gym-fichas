# Gym Builder · fichas de treino (GitHub Pages)

Site estático em https://leoborja.github.io/gym-fichas/ . Sem build: editar arquivo, commitar, push na `main`.

## Estrutura

| Arquivo | Papel |
|---|---|
| `index.html` | Casca da página do Leo (fichas A–E). Só HTML fixo + `<script>` das três peças abaixo. |
| `app.css` / `app.js` | Template compartilhado: visual, abas, registro de séries, cronômetro, vídeos, "Finalizar treino". **Toda mudança de design/comportamento vai aqui**, nunca inline nas páginas. |
| `videos.js` | Biblioteca `V` de vídeos de execução (ID do YouTube por exercício), com canal e duração no comentário. |
| `fichas/leo.js` | Dados das fichas do Leo + `CICLO` + `window.GB` (config da página). |
| `homero.html` + `fichas/homero.js` | Ficha do amigo Homero (Full Body 3x, base Refundini). Casca igual ao index (manifest e título próprios, `<small class="who">`), dados em `fichas/homero.js` com prefixo `fb_`, `rules` e `altLabel:'Laércio explica'` (2º vídeo `lr` = Laércio comentando, com `start`). Restrições do Leo NÃO valem pra ele: avançado, ombros lesionados (nada acima da cabeça), academia completa. Ver `docs/refundini/`. |
| `v1.html` | Ficha antiga do Leo (formato de texto corrido), arquivada. `v2.html` e `fullbody.html` só redirecionam. |
| `tools/yt.py` | Busca candidatos no YouTube e verifica IDs via oEmbed. |

## Como gerar uma ficha nova (mesociclo novo)

1. Arquivar a atual: copiar `fichas/leo.js` pra `fichas/arquivo/leo-AAAA-MM.js`.
2. Editar `fichas/leo.js`: atualizar `CICLO` (`nome`, `semana`, `gerada`) e os objetos em `FICHAS`. Não mexer em `app.js` pra isso.
3. Exercício inédito → achar vídeo (`python3 tools/yt.py "nome execução correta"`), verificar (`--verify ID`), adicionar em `videos.js` com comentário `// título · canal · duração`.
4. Abrir `index.html` local, conferir as abas, commitar.

A carga salva ("últ.") é indexada por **ficha + nome do exercício** (slug), então manter o nome do exercício igual entre mesociclos preserva o histórico; renomear zera. As referências ficam só no `localStorage` do celular.

## Esquema de uma ficha (`FICHAS[id]`)

```js
a:{ tab:"Peito · Ombro", title:"Peito superior + Ombro", sub:"Pesado", sets:31, min:38, warn:false,
    brief:"<strong>Regra do dia:</strong> ...",           // card no topo; warn:true deixa laranja (avisos médicos)
    items:[ ... ], volume:[["Peito",13],["Total",31]], note:"..." }
```

Itens de `items`, em ordem:

- `{block:"Bloco peito · superior"}` → separador.
- Exercício: `{n:1, name, tags:[...], sets, reps:"8–10", rest:90, yt:V.x, cues:[...], why:"..."}`.
  - `warm:true` → aquecimento (rail "AQ", sem número).
  - `tech:"Rest-pause na 4ª"` → chip vermelho + caixa "Técnica". `care:"RPE ≤7, sem falha"` → chip/caixa laranja.
  - `u:"kg"|"reps"|"seg"|"corpo"|"round"` → unidade do registro (`corpo` e `round` não têm campo, só o check).
  - `parts:[{l:"A", name, sub, yt:V.x, u}]` → superset/tri-set: uma linha e um registro por parte, um vídeo por parte.
  - `approach:true` (ou `[["A1","30% × 15"],["A2","50% × 10"]]`) → séries de aproximação tracejadas antes das séries.
  - `lr:{yt, start}` (no exercício ou na parte) → segundo vídeo com toggle; rótulo vem de `GB.altLabel`.
- Blocos repetidos entre fichas (ex.: perna em C e E) são constantes reutilizadas no arquivo de dados.

`window.GB = { prefix:'gb2_', fichas:FICHAS, ciclo:CICLO, rules:null|HTML, altLabel:'...' }`. `prefix` isola o localStorage por página; `rules` é um `<details class="rules" id="rules">` opcional no topo.

## Regras fixas do Leo (valem pra toda ficha dele)

- Joelho pós-operatório: perna 2x/semana com o MESMO bloco, carga conservadora, RPE ≤7, sem falha, sem técnica intensificadora na perna. Aquecimento do fisio (elástico 3 direções) obrigatório. Abdutora pendente de liberação.
- Lombar: nada de supino com barra ou máquina de supino; press é o supino sentado no cross.
- Halteres da academia vão até 20 kg; cargas altas ficam pra cabo e máquina.
- Prioridades: peito superior (P0), ombro lateral (P1). Ordem: todo um grupo antes do próximo, sem ping-pong.

## Vídeos

Um por exercício (por parte, em superset). Clipe curto (< 1 min ideal), em português, mostrando execução. Verificar existência com `tools/yt.py --verify`; embed é `youtube-nocookie` carregado só ao tocar. Se um vídeo aparecer "indisponível" no celular, trocar o ID.

## Design

Tipografia Barlow Condensed (números, títulos) + Barlow (texto). Vermelho `#E23C30` é a única cor de destaque; verde = série feita; laranja = cuidado médico. Light/dark por token em `app.css`. Header e cronômetro respeitam `env(safe-area-inset-*)` (app instalado na tela inicial). Página pensada pro celular na academia: modo Treino (coaching recolhido) é o padrão, modo Estudo abre tudo.

## Como criar uma ficha pra outra pessoa (Homero, ou qualquer outra)

Cada pessoa tem **uma página própria** (`<nome>.html`), **um arquivo de dados** (`fichas/<nome>.js`) e **um manifest** (`manifest-<nome>.webmanifest`). Visual e comportamento vêm sempre de `app.css` + `app.js`; nunca copiar CSS/JS inline. A ficha do Homero é o exemplo pronto.

### 1. Entrevista (perguntar antes de montar, com AskUserQuestion se for o Leo pedindo)
- **Nível**: iniciante (< 6 meses) · intermediário (1–3 anos) · avançado (3+). Define falha, séries iniciais e progressão.
- **Objetivo e frequência**: hipertrofia geral / com foco em X / força / emagrecimento; quantos dias e quais; tempo por sessão.
- **Limitações**: articulação, o que médico/fisio liberou ou proibiu, exercícios que doem. Vira `care:` nos exercícios e uma linha no bloco de regras.
- **Equipamentos**: academia completa ou o que falta (mesa flexora, leg press/hack, lateral máquina, halteres até X kg, panturrilha sentada…). Cada falta tem substituto anotado no `cues`.
- **Base metodológica** (opcional): treinador/criador de referência? Se sim, extrair o método antes (passo 2). Se não, usar a base padrão: proximidade da falha, progressão dupla, 3 comprimentos musculares, posterior = quadríceps, aquecimento geral + aproximação.

### 2. Base metodológica a partir de um criador (opcional)
Só quando a pessoa quer seguir alguém específico. Fluxo usado pro Refundini, reaproveitável:
1. `cd ~/guru && source .venv/bin/activate` · `python channel.py "@canal" -n 80 --min-seconds 120` lista o catálogo (forçar `Accept-Language: pt-BR` se vierem títulos em inglês).
2. Escolher só vídeos de **método e seleção de exercícios** (pular react, dieta, vlog). `extract.py <url> --stdout` transcreve em ~2 s cada; rodar em paralelo com `xargs -P`.
3. Ler por agentes em lotes de 4–6 vídeos, com o mesmo roteiro: tese, prescrições com números e timestamp, proibições, evidência citada, conflito de interesse, citações. Depois sintetizar em `docs/<criador>/METODO.md` (princípios, tabela de números, seleção por grupo, contradições, lacunas, red flags) e guardar as notas em `docs/<criador>/notas-brutas/`.
4. `comments.py <url> -n 30` nos mais vistos: a audiência corrige o criador.
5. Pra o 2º vídeo do toggle (`lr:{yt,start}`): achar o segundo em que ele fala do exercício grepando `segments[].start` no JSON da transcrição pelo nome do exercício.
`docs/refundini/METODO.md` já está pronto se alguém quiser a base Refundini.

### 3. Montar os dados
1. `cp fichas/_template.js fichas/<nome>.js` e preencher seguindo o esquema acima. Regras: pesado do dia primeiro; cada músculo cobre 3 comprimentos ao longo da semana; volume semanal por músculo somado e conferido na tabela `volume` de cada dia; limitações viram `care:` + linha em `RULES`; equipamentos ausentes viram substituto em `cues`.
2. Vídeos de execução: reaproveitar `V.*` de `videos.js`; exercício inédito → `python3 tools/yt.py "<exercício> execução correta"`, `--verify ID`, adicionar em `videos.js` com comentário `// título · canal · duração`. Se houver criador de referência, `lr:{yt, start}` no exercício (ou na parte).
3. `window.GB = { prefix:'<nome>_', fichas:FICHAS, ciclo:CICLO, rules:RULES|null, altLabel:'<Fulano> explica' }`. **Prefixo único por pessoa**: é o que isola as cargas no `localStorage`.
4. Escrever também `docs/<nome>/FICHA.md` (ou `docs/<criador>/FICHA-<nome>.md`) com regras, tabelas por dia, volume semanal, ciclo e "onde se afasta da base e por quê".

### 4. Página e manifest
1. `cp homero.html <nome>.html`; trocar `<title>`, `href="manifest-<nome>.webmanifest"`, `fichas/<nome>.js` e o `<small class="who">Ficha <Nome></small>` no header.
2. `sed 's|Ficha Homero|Ficha <Nome>|; s|"Homero"|"<Nome>"|; s|homero.html|<nome>.html|' manifest-homero.webmanifest > manifest-<nome>.webmanifest`.
3. Testar: `node --check fichas/<nome>.js`; servir com `python3 -m http.server 8765` e renderizar no Chrome headless (`--dump-dom` pra contar cards/toggles, `--screenshot` pra olhar). Conferir modo Estudo, tema claro e escuro.
4. Commit + push na `main`; a página fica em `https://leoborja.github.io/gym-fichas/<nome>.html` em ~30 s. Mandar o link; a pessoa adiciona à tela inicial (o manifest dá nome e ícone próprios). Pra trocar ícone ou corrigir o topo em app instalado, precisa apagar e adicionar o atalho de novo.

### 5. Mesociclo novo de uma pessoa existente
Igual ao fluxo do Leo: arquivar `fichas/<nome>.js` em `fichas/arquivo/<nome>-AAAA-MM.js`, atualizar `CICLO` e `FICHAS`. Manter os nomes dos exercícios preserva o histórico de carga ("últ."); renomear zera.
