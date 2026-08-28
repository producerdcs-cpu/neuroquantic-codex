# NeuroQuantic Codex™
## Status Quo Versátil · Lumen

> **Onde a linguagem encontra a consciência.**

**Projeto fundador:** Dinoel da Costa Soares  
**Identidade autoral:** **© DcsProducer®**  
**Estado atual:** `BUILD 1.0.5 — HARDENING & ORIGIN CONTROL · PUBLIC PREVIEW`  
**Lifecycle:** Experimental / Active Development  
**Interface:** Web estática / local-first  
**Arquitetura:** Modular, evolutiva e orientada a experiências

## Visão
O **NeuroQuantic Codex** é um ecossistema experimental de linguagem, poesia, filosofia e engenharia de software destinado a explorar múltiplas perspectivas da experiência humana. Cada entrada pode tornar-se um Códice; cada Códice pode abrir novas perguntas.

> **Não queremos apenas responder perguntas. Queremos construir novas perguntas.**

## Estado atual — 2026
A primeira Genesis Experience está publicada em **GitHub Pages** como **Public Preview**. Ela possui motor persistente local, interface interativa, Lumen Pause, memória local e possibilidade contextual. O próximo marco é validar o fluxo ponta a ponta antes de declarar a primeira 1.0 completa.

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
- **ORIGIN CONTROL 1.0.5** — restauração explícita da origem local do CODEX-0001;
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

## Public Preview

**Site:** `https://producerdcs-cpu.github.io/neuroquantic-codex/`

O site é público e experimental. Não inserir dados sensíveis. A memória atual
fica no navegador e não representa uma conta ou memória de servidor.

## Controle de Origem

A Genesis possui o comando **Restaurar Origem**. Ele limpa apenas a memória e o histórico locais deste navegador e restaura o estado canônico do CODEX-0001 — O Arquiteto e o Enigma da Luz — para `initiated`. Não apaga arquivos do GitHub, commits nem textos canônicos.

## Lumen Pause
O `Lumen Pause` é um estado funcional, não uma ausência de implementação.

Durante a pausa, a experiência oferece quatro portas:

- **Escrever** — registrar o que nasceu no espaço da pausa;
- **Contemplar** — permanecer com a pergunta sem encerrá-la;
- **Acaso ☄️** — abrir uma possibilidade emergente;
- **Continuar** — prosseguir sem forçar uma conclusão.

## Memória e linhagem
A Genesis utiliza o **Memory Layer ativo** do frontend. Registros recebem `parentId`, `origin`, profundidade e podem ser percorridos por `lineage()`.

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
| 1.0.3 | **Lumen Possibility Engine** | Contexto + acaso + possibilidades | 🟢 Implementado / Public Preview |
| 1.0.4 | **End-to-End Experience** | Validar fluxo completo | 🟡 **PRÓXIMO** |
| 1.0.5 | **Hardening & Origin Control** | Reset seguro, acessibilidade, segurança e regressão | 🟢 Em andamento |
| 1.1.x | **Codex Graph / Lineage** | Grafo de relações | 🔴 Planejado |
| 1.2.x | **Multilingual Lumen** | Evolução multilíngue | 🔴 Planejado |
| 2.x | **NeuroQuantic Experience Platform** | Plataforma ampliada / futura App | 🔴 Futuro |

### Critério para declarar a versão 1.0 completa
A versão 1.0 completa somente será considerada quando **Engine + UI + Memory Layer + Lumen + persistência + fluxo ponta a ponta + validação de regressão** estiverem integrados e testados.

## Segurança e estabilidade

- nenhum segredo ou API key no frontend;
- memória atual somente local;
- workflow Pages com permissões mínimas;
- `SECURITY.md` define divulgação coordenada;
- recomenda-se habilitar **Private Vulnerability Reporting**;
- recomenda-se proteger a branch `main` e exigir checks antes de merges;
- mudanças críticas devem passar por validação antes do deploy;
- integrações futuras com IA/backend devem manter segredos no servidor;
- dados sensíveis não são suportados no Public Preview.

## Autoria e licenciamento

Nesta fase, o projeto **não usa MIT**. O repositório possui um aviso proprietário
em [`LICENSE`](LICENSE), preservando a autoria e permitindo que a estratégia de
licenciamento seja definida posteriormente.

A visibilidade pública do código não equivale a uma licença geral de reutilização.
Para reutilização comercial, derivação substancial ou redistribuição, é necessária
a autorização do titular, salvo futura licença específica.

Consulte [`docs/IP-NOTICE.md`](docs/IP-NOTICE.md).

## Documentação técnica

- [`docs/STATUS.md`](docs/STATUS.md) — checkpoint do projeto;
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — arquitetura e limites;
- [`docs/RELEASE-CHECKLIST.md`](docs/RELEASE-CHECKLIST.md) — critérios de release;
- [`docs/PRIVACY.md`](docs/PRIVACY.md) — limites de privacidade do Public Preview;
- [`SECURITY.md`](SECURITY.md) — segurança e vulnerabilidades;
- [`LICENSE`](LICENSE) — aviso de propriedade intelectual.

## Estrutura principal
```text
neuroquantic-codex/
├── README.md
├── LICENSE
├── SECURITY.md
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
├── js/
│   └── codex-origin-control.js
├── codex/
└── docs/
```

## Legado preservado
O **NeuroQuantic Codex** é um projeto novo e não substitui projetos anteriores. O **NeuroLumem** e o **NeuroLeitor** permanecem independentes e preservados.

## Autor
**Dinoel da Costa Soares**  
**© DcsProducer®**

Concepção e direção do **NeuroQuantic Codex — Status Quo Versátil · Lumen**.

> *Toda grande obra começa quando alguém decide transformar uma pergunta em arquitetura.*

---
**NeuroQuantic Codex™ · BUILD 1.0.3 — LUMEN POSSIBILITY ENGINE · PUBLIC PREVIEW**
