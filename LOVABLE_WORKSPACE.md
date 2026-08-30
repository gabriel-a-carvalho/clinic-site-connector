# Estação de trabalho do Lovable — Clínica Abertamente

Este repositório é um laboratório React/TanStack Start separado da aplicação
Next.js real. Ele existe para experimentar e aprovar UI/UX antes da adaptação
manual ao projeto de produção.

## Shell preservado

Os componentes abaixo reproduzem a identidade e o contexto global do produto e
não fazem parte do redesign:

- `src/components/layout/site-header.tsx`
- `src/components/layout/site-footer.tsx`
- `src/components/layout/whatsapp-button.tsx`
- `src/components/layout/app-shell.tsx`
- tokens e tipografia em `src/styles.css`

## Áreas autorizadas para reconstrução

O Lovable pode redesenhar livremente somente os componentes e rotas marcados
com `data-lovable-target`:

- seção de Avaliações na home;
- catálogo `/avaliacoes`;
- detalhe `/avaliacoes/:slug`;
- seção de Equipe na home;
- catálogo `/equipe`;
- perfil `/equipe/:slug`;
- banner de Sublocação próximo ao Footer.

Os dados em `src/data/mock-content.ts` são mocks de protótipo. Não criar CMS,
backend ou integração WordPress neste repositório.

Como Serviços, Metodologia, Espaço, Blog e Contato não pertencem ao protótipo,
seus links no shell servem apenas como contexto visual e apontam para a área
relevante mais próxima. Não criar essas seções sem autorização explícita.

## Referência externa

A aplicação real está no repositório GitHub
`gcarvalho-labs/clinica-abertamente-site`. A branch `main` deve ser consultada
somente como referência de código. O pacote ZIP `docs/lovable` fornecido na
conversa é a referência visual e comportamental.
