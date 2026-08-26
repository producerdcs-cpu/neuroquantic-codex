# NeuroQuantic Codex™
## Status Quo Versátil · Lumen

> **Onde a linguagem encontra a consciência.**

**Projeto fundador:** Dinoel da Costa Soares  
**Identidade autoral:** **© DcsProducer®**  
**Estado atual:** `BUILD 1.0.1 — GENESIS EXPERIENCE UI`  
**Lifecycle:** Experimental / Active Development  
**Interface:** Web  
**Arquitetura:** Modular, evolutiva e orientada a experiências

## Visão
O **NeuroQuantic Codex** é um ecossistema experimental de linguagem, poesia, filosofia e engenharia de software destinado a explorar múltiplas perspectivas da experiência humana. Cada entrada pode tornar-se um Códice; cada Códice pode abrir novas perguntas.

> **Não queremos apenas responder perguntas. Queremos construir novas perguntas.**

## Estado atual — 2026
O projeto atravessou a fundação conceitual e o primeiro motor persistente. Agora a primeira Genesis Experience possui uma camada visual interativa e um estado explícito de **Lumen Pause**: o espaço entre pergunta e resposta permanece aberto de forma deliberada.

### Núcleos existentes
- **CODEX** — criação e arquivo local de fragmentos;
- **ENIGMA ENGINE** — enigmas, pistas e interpretação;
- **LUMEN ENGINE** — síntese local entre texto, perspectiva e enigma;
- **POETA / ARQUITETO** — lentes interpretativas preparadas;
- **TRANSLATOR** — contrato arquitetural inicial para a camada multilíngue;
- **MEMORY LOOP** — registro e linhagem de experiências/enigmas;
- **GENESIS EXPERIENCE ENGINE** — estado persistente da primeira Genesis Experience;
- **GENESIS EXPERIENCE UI** — entrada, pausa Lumen e ações de continuidade;
- **LUMEN PAUSE** — suspensão deliberada antes da próxima possibilidade;
- **LUMEN POSSIBILITY** — camada inicial para possibilidades emergentes por acaso;
- **Design System** — interface responsiva e acessível.

> **Nota técnica:** os engines atuais ainda são protótipos locais. Não há modelo de IA generativa, tradução por API ou memória semântica em nuvem integrada neste estágio.

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

O princípio autoral é preservado: quando a pergunta é dirigida ao Autor, **o sistema não responde por ele**. A resposta do Autor pode tornar-se um novo eco, memória, enigma ou possibilidade.

## Lumen Pause
O `Lumen Pause` é um estado funcional, não uma ausência de implementação.

Durante a pausa, a experiência oferece quatro portas:

- **Escrever** — registrar o que nasceu no espaço da pausa;
- **Contemplar** — permanecer com a pergunta sem encerrá-la;
- **Acaso ☄️** — abrir uma possibilidade emergente;
- **Continuar** — prosseguir sem forçar uma conclusão.

O estado é persistido localmente no navegador e pode avançar para uma possibilidade contextual.

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
           ESCREVER CONTEMPLAR ACASO
              │        │        │
              └────────┼────────┘
                       ▼
                POSSIBILIDADE
                       │
                       ▼
                    CODEX
                       │
                       ▼
                 MEMORY LOOP
                       │
                       ▼
                 NOVA PERGUNTA
                       │
                       └────────────↺
```

## Sistema de Códices
Tipos iniciais: `poema`, `poesia`, `pensamento`, `experiencia`, `enigma`, `manifesto`, `fragmento` e `pergunta`.

Cada Códice recebe um identificador incremental e pode possuir um codinome. O primeiro percurso narrativo é **CODEX-0001 — O Arquiteto e o Enigma da Luz**.

## Roadmap oficial
| Build | Codinome | Objetivo | Estado |
|---|---|---|---|
| 0.1.x | **Genesis Foundation** | Fundação + WebApp experimental | 🟢 Consolidado |
| 0.9.x | **Experience UI / Lumen Bridge** | Interface, experiência, memória e ponte Lumen | 🟢 Consolidado como base |
| 1.0.0 | **Genesis Experience Engine** | Motor persistente da primeira Genesis Experience | 🟢 Implementado |
| 1.0.1 | **Genesis Experience UI** | Interface interativa + Lumen Pause | 🟢 Em implementação |
| 1.0.2 | **Memory Loop Integration** | Integrar Genesis, memória e linhagem | 🟡 Próximo |
| 1.0.3 | **Lumen Possibility Engine** | Possibilidades, acaso e destinos | 🟡 Em construção |
| 1.0.4 | **End-to-End Experience** | Fluxo completo da experiência | 🟡 Planejado |
| 1.1.x | **Codex Graph / Lineage** | Grafo de relações entre Códices | 🔴 Planejado |
| 1.2.x | **Multilingual Lumen** | Tradução automática orientada ao usuário | 🔴 Planejado |
| 2.x | **NeuroQuantic Experience Platform** | Plataforma ampliada e futura versão App | 🔴 Futuro |

### Critério para declarar a versão 1.0 completa
A versão 1.0 completa somente será considerada quando **Engine + UI + Memory Loop + Lumen + persistência + fluxo ponta a ponta** estiverem integrados e testados.

## Estrutura atual
```text
neuroquantic-codex/
├── README.md
├── index.html
├── css/
│   └── design-system.css
├── js/
│   ├── app.js
│   ├── enigma-engine.js
│   ├── lumen-engine.js
│   ├── codex-memory-loop.js
│   ├── codex-memory-loop-ui.js
│   ├── genesis-experience.js
│   └── genesis-ui.js
├── codex/
├── docs/
└── assets/
```

## Legado preservado
O **NeuroQuantic Codex** é um projeto novo e não substitui projetos anteriores. O **NeuroLumen** e o **NeuroLeitor** permanecem independentes e preservados, podendo servir como referências arquiteturais sem sobrescrita automática.

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
**NeuroQuantic Codex™ · BUILD 1.0.1 — GENESIS EXPERIENCE UI**
