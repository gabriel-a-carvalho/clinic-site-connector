# Seção de Avaliações da home — direção editorial

Uma proposta única, autoral, substituindo a fórmula "título centralizado + grid de cards".

## Conceito: índice editorial com painel de leitura

A seção passa a funcionar como a abertura de um caderno editorial: um cabeçalho
assimétrico à esquerda, um **índice numerado** das avaliações à direita e um
**painel de leitura** que revela, em destaque progressivo, a avaliação
selecionada (título, descrição curta e temas em texto corrido, não em chips).

```text
desktop
┌───────────────────────────────┬──────────────────────────────┐
│ Avaliações (eyebrow vertical) │ 01 Investigação de TDAH      │
│                               │ 02 Neuropsicológica  ← ativa │
│ Conheça nossas                │ 03 Investigação de TEA       │
│ avaliações (display, à esq.)  │ 04 Aprendizagem              │
│                               │ 05 Personalidade             │
│ parágrafo curto               │ 06 Cognitiva                 │
│                               ├──────────────────────────────┤
│ → Ver todas as avaliações     │ painel: título + texto +     │
│                               │ temas em linha + "Mais sobre"│
└───────────────────────────────┴──────────────────────────────┘
```

- Sem caixas repetidas: o índice usa apenas filetes horizontais finos e o
  número em tipografia display; a linha ativa ganha recuo, cor primária e um
  traço-guia que avança suavemente.
- O painel troca de conteúdo por hover/foco/clique no índice (com transição
  curta de opacidade/deslocamento, respeitando `prefers-reduced-motion`).
- Um detalhe orgânico discreto (mancha `sage-light` fora do fluxo, como já
  existe no bloco de Sublocação) cria a surpresa visual sem ruído.

## Responsivo

- Desktop (lg): duas colunas assimétricas (~0.9fr / 1.1fr), painel fixo ao lado.
- Tablet (md): cabeçalho em cima, índice e painel empilhados; índice em duas
  colunas de linhas.
- Mobile: lista vertical de linhas numeradas; o painel da avaliação ativa se
  abre logo abaixo da linha selecionada (acordeão editorial), sem carrossel.

## Comportamento e dados

- Fonte de dados: `assessments` de `src/data/mock-content.ts` (sem alterações).
- Cada item leva a `/avaliacoes/$slug`; a linha do índice e o "Mais sobre" do
  painel são links reais (navegáveis por teclado, sem depender do hover).
- CTA principal: `Ver todas as avaliações` → `/avaliacoes`.
- Mostra as 6 avaliações no índice, mas só uma em profundidade — introduz o
  assunto sem replicar o catálogo.

## Escopo técnico

- Reescreve apenas `src/components/sections/prototype-assessments.tsx`
  (elemento `data-lovable-target="assessments"`).
- Novo componente local `src/components/prototype/assessment-index.tsx` para o
  índice + painel.
- `AssessmentCard`, `SectionHeading`, rotas `/avaliacoes` e `/avaliacoes/$slug`,
  header, footer, tokens e a seção de Sublocação **permanecem intactos**.
  `SectionHeading` continua em uso pelas rotas aprovadas; a home deixa de usá-lo.
- Sem novas dependências; só tokens semânticos existentes.
