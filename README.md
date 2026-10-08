# Aldeia Spa Wellness

Site institucional estático em React, Vite e TypeScript. Não requer servidor Node.js em produção.

## Desenvolvimento e build

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

O build estático é gerado em `dist/public`.

## Publicação

Cada push na branch `main` executa `.github/workflows/pages.yml` e publica `dist/public` no GitHub Pages.

## Domínio próprio: aldeiaspa.com.br

O arquivo `client/public/CNAME` configura o domínio canônico `aldeiaspa.com.br`. No painel DNS do registrador do domínio, configure:

- Apex `@`: registros A para `185.199.108.153`, `185.199.109.153`, `185.199.110.153` e `185.199.111.153`.
- Apex `@`: registros AAAA para `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153` e `2606:50c0:8003::153` (recomendados pelo GitHub).
- Opcional para `www`: CNAME apontando para `scripttok.github.io`.

Remova registros A/AAAA conflitantes. A propagação pode levar até 24–48 horas. O HTTPS será provisionado pelo GitHub Pages após a validação DNS.
