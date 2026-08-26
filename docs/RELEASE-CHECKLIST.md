# Release Checklist — NeuroQuantic Codex™

## Public Preview — BUILD 1.0.3

### Produto

- [x] Genesis Experience publicada
- [x] Lumen Pause funcional
- [x] Memory Layer local
- [x] Possibility Engine contextual
- [x] GitHub Pages operacional
- [ ] Fluxo End-to-End validado em navegador real
- [ ] Acessibilidade completa revisada
- [ ] Testes de regressão automatizados

### Segurança

- [x] Nenhuma API key no frontend
- [x] Nenhum segredo versionado conhecido
- [x] Workflow Pages com permissões mínimas
- [x] Política SECURITY.md
- [x] Política de IP/autoria
- [ ] Private vulnerability reporting habilitado no GitHub
- [ ] Proteção de `main` configurada
- [ ] Revisão periódica de dependências / Actions

### Conteúdo e autoria

- [x] Autor identificado
- [x] Identidade DcsProducer® documentada
- [x] Conteúdo original preservado
- [x] Licença proprietária explícita nesta fase
- [ ] Política futura de licenciamento revisada antes de qualquer abertura do core

### Próximo gate

A passagem para **BUILD 1.0.4 — End-to-End Genesis Experience** exige teste do
ciclo completo:

`entrada → Genesis → Autor → Lumen Pause → possibilidade → memória → nova pergunta`

A passagem para uma futura versão de produção exige, além disso, backend,
autenticação, observabilidade, proteção de dados, testes e política de privacidade
adequada ao uso pretendido.
