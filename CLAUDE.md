# Gym Builder · fichas de treino (GitHub Pages)

Site estático em https://leoborja.github.io/gym-fichas/ . Sem build: editar arquivo, commitar, push na `main`.

## Estrutura

| Arquivo | Papel |
|---|---|
| `index.html` | Casca da página do Leo (fichas A–E). Só HTML fixo + `<script>` das três peças abaixo. |
| `app.css` / `app.js` | Template compartilhado: visual, abas, registro de séries, cronômetro, vídeos, "Finalizar treino". **Toda mudança de design/comportamento vai aqui**, nunca inline nas páginas. |
| `videos.js` | Biblioteca `V` de vídeos de execução (ID do YouTube por exercício), com canal e duração no comentário. |
| `fichas/leo.js` | Dados das fichas do Leo + `CICLO` + `window.GB` (config da página). |
| `homero.html` | Ficha do amigo Homero (Full Body 3x, base Refundini). Hoje ainda é self-contained (CSS+JS inline, prefixo `fb_`); migrar pra `app.js` + `fichas/homero.js` quando for mexer nela. Restrições do Leo NÃO valem pra ele (ver `docs/refundini/`). |
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

Tipografia Barlow Condensed (números, títulos) + Barlow (texto). Vermelho `#E23C30` é a única cor de destaque; verde = série feita; laranja = cuidado médico. Light/dark por token em `app.css`. Página pensada pro celular na academia: modo Treino (coaching recolhido) é o padrão, modo Estudo abre tudo.
