# Marvel Heroes

Esse projeto é uma aplicação React que consome a API pública da Marvel. É possível ver conhecer os personagens do universo Marvel, ou procurar sobre um personagem para visualizar mais detalhes.
## Estratégia

A aplicação foi criada utilizando componentes funcionais e hooks para o controle de estado.

O projeto conta com um Global Storage, criado com contexto, para os estados compartilhado entre as telas.

A aplicação utiliza Sass e Sass Modules para melhor controle do nome das classes. Ainda para facilitar a estilização e futuro desenvolvimento da aplicação, há um estilo global e um arquivo de cores que é compartilhado entre todos os componentes.

Para manter o padrão do código e a eficiência, a aplicação utiliza o Prettier e o ESlint.

Como dependências adicionais, a aplicação utiliza o MD5 para lidar com o hash das requisições, o react-router-dom para as rotas e o node-sass.
## Links

A layout e do design system podem ser visualizados no [figma do projeto](https://www.figma.com/file/5ybxJ8tiWVErftti5n6thK/Hands-on-Jo%C3%A3o-Leviski-Alves?node-id=0%3A1).

A aplicação em produção pode ser [visitada](https://gallant-poincare-95d345.netlify.app/).
### Utilização

Para rodar a aplicação em desenvolvimento, deve-se após de clonar o repositório, criar um arquivo `.env` na raíz do projeto e utilizar o arquivo `.env.example` para adicionar as suas credenciais da [api](https://developer.marvel.com/).

