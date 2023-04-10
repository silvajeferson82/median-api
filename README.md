<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<h1 align="center">
Construindo uma API REST com NestJS e Prisma
</h1>
<p align="center">
  <a href="https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0
" target="blank"><img src="src/assets/nestjs-prisma-rest-api.svg" /></a>
</p>


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Docker

```bash
# create docker-compose file
$ touch docker-compose.yml


$ # docker-compose.yml
version: '3'

services:
pgsql:
image: postgres:alpine
ports: - '5433:5432'
container_name: 'pgsql'
restart: always
volumes: - pg-data:/var/lib/postgresql/data
environment:
POSTGRES_USER: pguser
POSTGRES_PASSWORD: pgpassword
volumes:
pg-data:

# run
$ docker-compose up
```


## Swagger
```bash
# http://localhost:3000/api
```
<p align="center">
  <a href="https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0
" target="blank"><img src="src/assets/final-app.png" /></a>
</p>

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
