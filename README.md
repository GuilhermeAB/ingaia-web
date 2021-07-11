[![Lighthouse Accessibility Badge](./lighthouse-results/lighthouse_accessibility.svg)](https://github.com/GuilhermeAB/ingaia-web)
[![Lighthouse Best Practices Badge](./lighthouse-results/lighthouse_best-practices.svg)](https://github.com/GuilhermeAB/ingaia-web)
[![Lighthouse Performance Badge](./lighthouse-results/lighthouse_performance.svg)](https://github.com/GuilhermeAB/ingaia-web)
[![Lighthouse SEO Badge](./lighthouse-results/lighthouse_seo.svg)](https://github.com/GuilhermeAB/ingaia-web)

# Rick and Morty - Characters search (WEB)
Aplicação de busca de personagens do Rick and Morty. Consumindo os dados de [Rick and Morty API](https://rickandmortyapi.com/graphql). Saiba mais acessando o [link](https://rickandmortyapi.com/).

## Demo
Acesse a demo através do [link](https://guilhermeab.github.io/ingaia-web/#/)

## Requisitos

- [x] Aplicação online (github-pages)
- [x] Repositório público no GitHub
- [x] Consumir dados da API: https://rickandmortyapi.com/graphql
- [x] Telas desktop e mobile
- [x] Acessibilidade
- [x] Navegação por teclado
- [ ] Testes unitários e testes de integração
- [ ] Testes End to End
- [x] CI/CD

Bônus

- [x] Busca por voz (Apenas navegadores com suporte ao webkitSpeechRecognition, como o Google Chrome)

## Configuração

1. Crie um arquivo `.env` (na raiz do projeto) seguindo o exemplo em `.env.example`
2. Edite os valores das váriaveis contidas em seu `.env` de acordo com o que for necessário
3. Instale as dependências do projeto

```sh
# Instalar dependencias
yarn install
```

```sh
# Executar aplicação em modo de desenvolvimento
yarn serve
```

```sh
# Build produção
yarn build
```

### Testes unitários
```
yarn test:unit
```

### Testes end-to-end
```
yarn test:e2e
```

## Contribuições

Siga os passos a baixo para contribuir com alterações e novas funcionalidades para o projeto. Lembrando sempre de seguir as boas práticas de desenvolvimento e os padrões de código definidos pela equipe do projeto. **Nenhum código fora dos padrões ou com erros de lint serão aceitos**.

1. Crie um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Faça um Push da sua Branch  (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Tecnologias utilizadas

Lista de algumas das tecnologias/pacotes que utilizei na aplicação

* [Javascript](https://www.javascript.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Vue.js](https://vuejs.org/)
* [Vuetify](https://vuetifyjs.com/en/)
* [Graphql](https://graphql.org/)
* [Vue Apollo](https://apollo.vuejs.org/)
* [Vue i18n](https://kazupon.github.io/vue-i18n/)
* [Vue Router](https://router.vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [Scss](https://sass-lang.com/)
* [Vue CLI](https://cli.vuejs.org/)
* [Webpack](https://webpack.js.org/)
* [Webpack-chain](https://github.com/neutrinojs/webpack-chain)
* [Eslint](https://eslint.org/)
* [StyleLint](https://stylelint.io/)
* [Lodash](https://lodash.com/)
* [Sweet-Alert](https://sweetalert2.github.io/)

Entre outras ferramentas como o [TinyPng](https://tinypng.com/) para compressão das imagens do projeto.


### Outros

Para analisar e gerar as badges do lighthouse siga os seguintes passos:

```sh
# Necessário node v12 ou superior
npm i -g lighthouse-badges

lighthouse-badges --urls <URL_A_SER_ANALISADA> -o lighthouse-results
# lighthouse-results é o nome da pasta que será armazenado as badges. Caso deseje analisar mais de um url, separe-as por espaço
```
Saiba mais sobre o lighthouse clicando [aqui](https://developers.google.com/web/tools/lighthouse). Saiba mais sobre o lighthouse-badges clicando [aqui](https://github.com/emazzotta/lighthouse-badges).
