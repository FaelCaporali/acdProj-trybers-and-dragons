# Boas vindas ao repositório do projeto Trybers and Dragons(T&D)

---
⚔️🐉🐲⚔️

Repositório acadêmico
Web-Fullstack-Development -> [Trybe](https://www.betrybe.com/)

--- ⚔️🐉🐲⚔️ ---

## Aqui você encontra

1. Informações sobre o projeto
2. Como rodar localmente.
3. Outros projetos.

--- ⚔️🐉🐲⚔️ ---

<details>
  <summary><strong>TRYBERS AND DRAGONS</strong></summary>

- T&D foi um projeto realizado durante o módulo de **Backend** em 18/10/2022

- 🧝🦄🐲 Em Trybers & Dragons, construímos um simples sistema de batalhas inspirado em RPGs e fantasias medievais que simulam um universo mágico!!!

- 💻 ⌨️🧑‍💻 :
Para isso, aplicamos os conceitos de ***OOP*** construindo e implementando classes que constroem personagens e simulam batalhas.
Também nos baseamos nos princípio ***SOLID***, organizando propósitos específicos para representar nossas entidades de maneira concisa.
A arquitetura dos diretórios e arquivos repete um padrão para auxiliar com que que cada classe aceite extensões de forma segura.
Tudo isso utilizando ***TypeScript***, auxiliando a aplicação da "sub-tipagem comportamental" com cada interface cumprindo um objetivo único. 👊

> ```typescript
>
> const keyWords: BackendStacks[] = [NODE, TYPESCRIPT, OOP, SOLID, ESLINT, DOCKER];
>
> ```

```tree

src
├── Archetypes              -> Classes que representam possíveis arquétipos implementados em personagens
│   ├── index.ts            -> Organizador de classes da entidade "Arquétipos"
│   ├── Archetype.ts        -> Uma classe abstrata contendo conceitos inatos comuns às classes da entidade
│   └── *.ts                -> Demais classes que representam arquétipos a serem implementadas em personagens
|
├── Battle                  -> Classes que implementadas, representam batalhas entre personagens
│   ├── Battle.ts           -> Classe abstrata
│   ├── index.ts            -> Organizador
│   └── *.ts                -> demais classes que recebem personagens para implementações
|
├── Fighter                 -> Interfaces de personagens
|
├── helpers                 -> Funções auxiliares globais
|
├── Races                   -> Classes que representam possíveis raças implementadas em personagens
│   ├── index.ts            -> Organizador
│   ├── Race.ts             -> Classe abstrata
│   └── *.ts                -> Demais classes que representam raças a serem implementadas em personagens
|
├── Character.ts            -> Classe que constrói uma personagem
├── Dragon.ts               -> SubClasse de monstro
├── Energy.ts               -> Classe usada em construção de uma personagem
├── index.ts                -> script de implementações
└── Monster.ts              -> Classe que constrói uma personagem

```

</details>

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rafelhon@gmail.com) &nbsp;
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/faelcaporali/) &nbsp;
