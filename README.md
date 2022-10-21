# Boas vindas ao projeto Trybers and Dragons(T&D)

---
⚔️🐉🐲⚔️

Repositório acadêmico
Web-Fullstack-Development -> [Trybe](https://www.betrybe.com/)

--- ⚔️🐉🐲⚔️ ---

```typescript

const keyWords: [Production[], Development[]] = 
  [[NODE, DOCKER], [TYPESCRIPT, OOP, SOLID, ESLINT]];

```

<details>

<summary>

## TRYBERS AND DRAGONS

</summary>

- 🧝 Em Trybers & Dragons, projeto desenvolvido no módulo ***backend***, construímos um simples sistema de batalhas inspirado em RPGs e fantasias medievais que simulam um universo mágico! 🦄🐲

- 💻⌨️:
Para isso, aplicamos os conceitos de ***OOP*** construindo e implementando classes que constroem personagens e simulam batalhas.
Também nos baseamos nos princípio ***SOLID***, organizando propósitos específicos para representar nossas entidades de maneira concisa.
A arquitetura dos diretórios e arquivos repete um padrão para auxiliar com que que cada classe aceite extensões de forma segura.
Tudo isso utilizando ***TypeScript***, auxiliando a aplicação da "sub-tipagem comportamental" com cada interface cumprindo um objetivo único. 🧑‍💻👊


## PARA RODAR O PROJETO

1. Docker:

> Com o docker e docker compose instalado (em versões mais atualizadas do docker o composer vem por default), execute:
>
> ```bash
> docker compose up
> ```
>
> e ✨✨✨ pronto!
> ❗**OBSERVAÇÃO** Para este projeto, o comando acima cria container, o executa e o serviço é parado. Para executar o script novamente, reinicie o container criado, ou desça a rede criada (docker compose down) e o crie novamente.

2. Local:

> Clone o repositório, entre na pasta raiz, instale as dependências e rode o projeto:
>
> ```bash
>
> git clone git@github.com:FaelCaporali/acdProj-trybers-and-dragons.git && cd acdProj-trybers-and-dragons && npm i && npm start
>
> ```

## SCRIPTS

- start: roda os scripts do projeto e imprime em seu console o resultado da simulação de batalha.

</details>

<details>
  <summary><strong>ARQUITETURA</strong></summary>

```tree

src
├── Archetypes        -> Classes que representam possíveis arquétipos implementados em personagens
│   ├── index.ts      -> Organizador de classes da entidade "Arquétipos"
│   ├── Archetype.ts  -> Uma classe abstrata contendo conceitos inatos comuns às classes da entidade
│   └── *.ts          -> Demais classes que representam arquétipos a serem implementadas em personagens
|
├── Battle            -> Classes que implementadas, representam batalhas entre personagens
│   ├── Battle.ts     -> Classe abstrata
│   ├── index.ts      -> Organizador
│   └── *.ts          -> demais classes que recebem personagens para implementações
|
├── Fighter           -> Interfaces de personagens
|
├── helpers           -> Funções auxiliares globais
|
├── Races             -> Classes que representam possíveis raças implementadas em personagens
│   ├── index.ts      -> Organizador
│   ├── Race.ts       -> Classe abstrata
│   └── *.ts          -> Demais classes que representam raças a serem implementadas em personagens
|
├── Character.ts      -> Classe que constrói uma personagem
├── Dragon.ts         -> SubClasse de monstro
├── Energy.ts         -> Classe usada em construção de uma personagem
├── index.ts          -> script de implementações
└── Monster.ts        -> Classe que constrói uma personagem

```

</details>

<details>
  <summary><strong>OUTROS PROJETOS ACADÊMICOS</strong></summary>

> <details>
>   <summary>FUNDAMENTOS</summary>
>
> - [ ] 1.01 - Lessons learned
> - [ ] 1.02 - Pixels art
> - [ ] 1.03 - Meme generator
> - [ ] 1.04 - Color guess
> - [ ] 1.05 - Mystery letter
> - [ ] 1.05 - TrybeWarts
> - [ ] 1.06 - Testes unitários
> - [ ] 1.07 - Zoo Functions
> - [ ] 1.08 - Shopping cart
>
> </details>

> <details>
>   <summary>FRONTEND</summary>
>
> - [ ] 2.01 - Solar system
> - [ ] 2.02 - Tryunfo
> - [ ] 2.03 - Trybe tunes
> - [ ] 2.04 - FrontEnd online store
> - [ ] 2.05 - React testing library
> - [ ] 2.06 - Trybe wallet
> - [ ] 2.07 - Trivia game
> - [ ] 2.08 - StarWars planets
> - [ ] 2.09 - Recipes App
>
> </details>

> <details open>
>   <summary>BACKEND</summary>
>
> - [ ] 3.01 - Docker to-do list
> - [ ] 3.02 - MySQL - all for one
> - [ ] 3.03 - MySQL - one for all
> - [ ] 3.04 - Talker manager
> - [ ] 3.05 - Store manager
> - [ ] 3.06 - Stranger Things
> - [ ] 3.07 - Trybesmith
> - [x] 3.08 - Trybers and Dragons ⚔️🐉**você está aqui!**🐲⚔️
> - [ ] 3.09 - Trybe futebol clube
> - [ ] 3.10 - E-commerce
> - [ ] 3.11 - Car shop
> - [ ] 3.12 - Delivery app
>
> </details>

> <details>
>   <summary>CIÊNCIAS DA COMPUTAÇÃO</summary>
>
> - [ ] 4.01 - Job insights
> - [ ] 4.02 - Relatório de estoque
> - [ ] 4.03 - Tech news
> - [ ] 4.04 - Algoritmos
> - [ ] 4.05 - TING - Trybe is not google
> - [ ] 4.06 - Restaurant orders
>
> </details>

</details>

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rafelhon@gmail.com) &nbsp;
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/faelcaporali/) &nbsp;
[![CodeWars](https://img.shields.io/badge/Codewars-B1361E?style=for-the-badge&logo=Codewars&logoColor=white)](https://www.codewars.com/users/MudSailor) &nbsp;
