# Security Policy — NeuroQuantic Codex™

## Status

O NeuroQuantic Codex está em **desenvolvimento experimental / public preview**.
A versão publicada é uma experiência web estática e local-first. Não deve ser
tratada como serviço de produção para dados sensíveis.

## Escopo atual

- O estado e a memória da experiência ficam no navegador do visitante.
- Não há backend próprio, banco de dados remoto ou autenticação implementados.
- Não colocar senhas, tokens, chaves de API, documentos pessoais ou outros
  dados sensíveis na experiência.
- O GitHub Pages é hospedagem pública; o conteúdo publicado deve ser tratado
  como público.

## Como relatar uma vulnerabilidade

**Não publique detalhes de uma vulnerabilidade em uma issue pública.**

Para repositórios públicos, o caminho preferencial é o recurso de **Private
vulnerability reporting / Security Advisories** do GitHub, quando habilitado.
Caso o recurso não esteja disponível, abra uma issue solicitando o canal privado
sem incluir detalhes técnicos da vulnerabilidade.

Inclua, quando possível:

1. descrição do problema;
2. passos mínimos para reproduzir;
3. impacto observado;
4. versão/commit afetado;
5. evidências sem expor segredos ou dados pessoais.

## Processo de resposta

1. triagem privada;
2. confirmação e classificação do impacto;
3. correção em branch isolada;
4. teste e validação;
5. publicação da correção;
6. divulgação coordenada, quando apropriada.

## Segredos

Nunca commitar:

- API keys;
- tokens de acesso;
- senhas;
- arquivos `.env` com valores reais;
- credenciais de serviços;
- dados pessoais não necessários.

O projeto deve evoluir para um backend separado caso futuramente precise de
segredos, autenticação, pagamentos ou dados persistentes de usuários.

## Dependências e cadeia de entrega

Mudanças de dependências devem ser avaliadas antes da publicação. O workflow
de GitHub Pages deve permanecer com permissões mínimas e publicar somente o
artefato destinado ao site.
