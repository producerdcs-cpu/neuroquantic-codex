# NeuroQuantic Codex™
## Status Quo Versátil · Lumen

> **Onde a linguagem encontra a consciência.**

**Projeto fundador:** Dinoel da Costa Soares  
**Identidade autoral:** **© DcsProducer®**  
**Estado atual:** `BUILD 1.0.3 — LUMEN POSSIBILITY ENGINE`  
**Lifecycle:** Experimental / Active Development  
**Interface:** Web estática / local-first  
**Arquitetura:** Modular, evolutiva e orientada a experiências

## Visão
O **NeuroQuantic Codex** é um ecossistema experimental de linguagem, poesia, filosofia e engenharia de software destinado a explorar múltiplas perspectivas da experiência humana. Cada entrada pode tornar-se um Códice; cada Códice pode abrir novas perguntas.

> **Não queremos apenas responder perguntas. Queremos construir novas perguntas.**

## Estado atual — 2026
A primeira Genesis Experience já possui motor persistente, interface interativa, **Lumen Pause**, memória local e possibilidade contextual. O projeto está entrando na fase de validação do fluxo ponta a ponta.

### Núcleos existentes
- **CODEX** — criação e arquivo local de fragmentos;
- **ENIGMA ENGINE** — enigmas, pistas e interpretação;
- **LUMEN ENGINE** — síntese local entre texto, perspectiva e enigma;
- **POETA / ARQUITETO** — lentes interpretativas preparadas;
- **TRANSLATOR** — camada multilíngue experimental;
- **MEMORY LAYER** — persistência local e linhagem de registros;
- **GENESIS EXPERIENCE ENGINE 1.0.3** — estado persistente da primeira Genesis Experience;
- **GENESIS EXPERIENCE UI 1.0.1** — entrada, pausa Lumen e ações de continuidade;
- **LUMEN PAUSE** — suspensão deliberada antes da próxima possibilidade;
- **LUMEN POSSIBILITY** — possibilidades contextuais com acaso entre candidatas;
- **CODEX TIMELINE / GRAPH** — bases visuais para movimento e relações;
- **Design System** — interface responsiva e acessível.

> **Nota técnica:** os engines são protótipos locais. Não há modelo de IA generativa, tradução por API ou memória semântica em nuvem integrada neste estágio.

## Genesis Experience — CODEX-0001
**Codename:** *O Arquiteto e o Enigma da Luz*  
**Modo:** `Poeta → Enigma → Lumen`  
**Estado:** `exploring`

A Genesis Experience transforma a interação em ciclo:

```text
PERGUNTA → EXPERIÊNCIA → RESPOSTA DO AUTOR → LUMEN PAUSE
     ↑                                      ↓
     └──── NOVA PERGUNTA ← POSSIBILIDADE ← ACASO
```

O princípio autoral é preservado: **o sistema não responde pelo Autor**. A resposta do Autor pode tornar-se eco, memória, enigma ou possibilidade.

## Lumen Pause
O `Lumen Pause` é um estado funcional, não uma ausência de implementação.

Durante a pausa, a experiência oferece quatro portas:

- **Escrever** — registrar o que nasceu no espaço da pausa;
- **Contemplar** — permanecer com a pergunta sem encerrá-la;
- **Acaso ☄️** — abrir uma possibilidade emergente;
- **Continuar** — prosseguir sem forçar uma conclusão.

## Memória e linhagem
A Genesis agora utiliza o **Memory Layer ativo** do frontend. Registros recebem `parentId`, `origin`, profundidade e podem ser percorridos por `lineage()`.

A memória é **local ao navegador** neste estágio. Ela não é uma memória de servidor e não deve ser confundida com memória semântica em nuvem.

## Arquitetura Cognitiva
```text
                    ENTRADA
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
        POETA       ENIGMA      ARQUITETO
          │            │            │
          └────────────┼────────────┘
                       ▼
                     LUMEN
                       │
                 LUMEN PAUSE
                       │
              ┌────────┼────────┐
              ▼        ▼        ▼
           ESCREVER CONTEMPLAR ACASO ☄️
              │        │        │
              └────────┼────────┘
                       ▼
                POSSIBILIDADE
                       │
                       ▼
                 MEMORY LAYER
                       │
                       ▼
                 NOVA PERGUNTA
                       │
                       └────────────↺
```

## Roadmap oficial
| Build | Codinome | Objetivo | Estado |
|---|---|---|---|
| 0.1.x | **Genesis Foundation** | Fundação + WebApp experimental | 🟢 Consolidado |
| 0.9.x | **Experience UI / Lumen Bridge** | Base visual e experiência | 🟢 Consolidado como base |
| 1.0.0 | **Genesis Experience Engine** | Motor persistente | 🟢 Implementado |
| 1.0.1 | **Genesis Experience UI** | Interface + Lumen Pause | 🟢 Implementado |
| 1.0.2 | **Memory Loop Integration** | Memória e linhagem | 🟢 Integrado ao Memory Layer |
| 1.0.3 | **Lumen Possibility Engine** | Contexto + acaso + possibilidades | 🟢 Implementado |
| 1.0.4 | **End-to-End Experience** | Validar fluxo completo | 🟡 **PRÓXIMO** |
| 1.1.x | **Codex Graph / Lineage** | Grafo de relações | 🔴 Planejado |
| 1.2.x | **Multilingual Lumen** | Evolução multilíngue | 🔴 Planejado |
| 2.x | **NeuroQuantic Experience Platform** | Plataforma ampliada / futura App | 🔴 Futuro |

### Critério para declarar a versão 1.0 completa
A versão 1.0 completa somente será considerada quando **Engine + UI + Memory Layer + Lumen + persistência + fluxo ponta a ponta** estiverem integrados e testados.

## Estrutura principal
```text
neuroquantic-codex/
├── README.md
├── index.html
├── css/
│   └── design-system.css
├── js/
│   ├── enigma-engine.js
│   ├── lumen-engine.js
│   ├── memory-layer.js
│   ├── genesis-experience.js
│   ├── genesis-ui.js
│   ├── codex-timeline.js
│   ├── codex-graph.js
│   └── ...
├── .github/
│   └── workflows/
│       └── pages.yml
├── codex/
├── docs/
└── assets/
```

## Publicação
O repositório é público e possui workflow de **GitHub Pages** preparado para publicação automática a partir da `main`. A publicação depende de o Pages estar configurado no repositório para usar **GitHub Actions**.

**Destino esperado:**
`https://producerdcs-cpu.github.io/neuroquantic-codex/`

## Legado preservado
O **NeuroQuantic Codex** é um projeto novo e não substitui projetos anteriores. O **NeuroLumem** e o **NeuroLeitor** permanecem independentes e preservados.

## Segurança e evolução
- nenhuma chave de API no frontend ou Git;
- segredos somente por variáveis de ambiente no futuro backend;
- acessibilidade e responsividade desde o protótipo;
- separação entre protótipo local e produção;
- evolução incremental e commits rastreáveis;
- testes antes de integrações externas críticas.

## Autor
**Dinoel da Costa Soares**  
**© DcsProducer®**

Concepção e direção do **NeuroQuantic Codex — Status Quo Versátil · Lumen**.

> *Toda grande obra começa quando alguém decide transformar uma pergunta em arquitetura.*

---
**NeuroQuantic Codex™ · BUILD 1.0.3 — LUMEN POSSIBILITY ENGINE**
