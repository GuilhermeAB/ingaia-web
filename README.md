# inGaia - Front-end Developer (WIP)
Aplicação de busca de personagens do Rick and Morty

## Demo
Acesse a demo através de [link](https://guilhermeab.github.io/ingaia-web/#/)

## Requisitos

- [x] Aplicação online
- [x] Repositório público no GitHub e acesso compartilhado com o usuário engenhariaingaia
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
* [Vue.js](https://vuejs.org/)
* [Vuetify](https://vuetifyjs.com/en/)
* [Vue Apollo](https://apollo.vuejs.org/)
* [Vue i18n](https://kazupon.github.io/vue-i18n/)
* [Vue Router](https://router.vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [Scss](https://sass-lang.com/)
* [Vue CLI](https://cli.vuejs.org/)
