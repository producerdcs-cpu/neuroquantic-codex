# NeuroQuantic Codex — Arquitetura Cognitiva Genesis

## Estado de engenharia

**BUILD 1.0.3 — Lumen Possibility Engine / Public Preview**

O Codex é uma aplicação web estática, modular e local-first. A experiência atual
não deve ser confundida com uma plataforma de IA multiusuário de produção.

## Princípio

O Codex não será modelado como um chatbot monolítico. A experiência é organizada
como um sistema multifacetado de perspectivas, coordenado por uma camada futura
de orquestração.

```text
PUBLIC WEB UI
      ↓
Genesis Experience
      ↓
Lumen Pause
      ↓
Possibility Engine
      ↓
Memory Layer (local)
      ↓
Timeline / Graph
```

Camadas auxiliares:

```text
Poeta / Enigma / Arquiteto / Lumen / Translator
AI Orchestrator / Agent Router (experimental)
Semantic Memory (experimental)
```

## Função das perspectivas

- **Poeta:** metáfora, ritmo, emoção, imagem e linguagem criativa.
- **Enigma:** paradoxo, charada, pergunta e ambiguidade controlada.
- **Arquiteto:** decomposição, estrutura, relações e síntese lógica.
- **Lumen:** conexões, contrastes, padrões e novas perspectivas.
- **Translator:** adaptação linguística preservando contexto e intenção.
- **Codex:** registro, organização, versionamento e relações entre Códices.

## Genesis Experience

```text
PERGUNTA → EXPERIÊNCIA → AUTOR → LUMEN PAUSE
                              ↓
                     POSSIBILIDADE / ACASO
                              ↓
                         MEMORY LOCAL
                              ↓
                       NOVA PERGUNTA
```

**Origin First:** o conteúdo original permanece identificável. O Lumen não
substitui a resposta do Autor.

## Estado e memória

A Genesis mantém estado no navegador e cria registros relacionados por `parentId`.
A linhagem é reconstruída localmente. Isso é adequado para protótipo e validação
de experiência, mas não é uma memória multiusuário ou semântica em nuvem.

## Limites atuais

Ainda não declarar como implementado:

- IA generativa real;
- memória semântica em nuvem;
- autenticação;
- banco remoto multiusuário;
- tradução por API;
- agentes autônomos de produção;
- proteção de conteúdo contra cópia por visitantes;
- ambiente adequado para dados sensíveis.

## Segurança por desenho

- nenhum segredo no frontend;
- nenhum token/API key versionado;
- permissões mínimas no workflow Pages;
- publicação somente do conteúdo destinado ao site;
- correções de segurança devem ser tratadas privadamente quando possível;
- `main` deve evoluir com validação e, quando possível, proteção de branch;
- mudanças críticas devem ser testadas antes do deploy.

## Próxima arquitetura

O próximo salto deve separar:

```text
PUBLIC WEB APP
      ↓ HTTPS API
BACKEND / AUTH
      ↓
DATA + MEMORY
      ↓
AI / AGENTS
```

Nenhuma chave privada deve ser colocada no frontend para viabilizar esse salto.

## Evolução planejada

`Genesis → Codex → Enigma → Lumen → Multilingual → AI Core → Agents → Memory → MVP`

A arquitetura deverá permitir evolução de **WebApp para PWA e posteriormente
aplicações móveis**, sem reescrever o núcleo conceitual.

---

**Dinoel da Costa Soares**  
**© DcsProducer®**
