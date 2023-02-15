## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## APIS

```bash
 Post
 http://localhost:3000/ninja/
 creates a new ninja:
 *name: string
 *weapon: 'stars' | 'nunchucks'

 GET
 http://localhost:3000/ninja/
 returns all available ninjas

 GET
 http://localhost:3000/ninja/:id
 returns specific ninjas

 Put
 http://localhost:3000/ninja/:id
 update a specific ninja detail

 Delete
 http://localhost:3000/ninja/:id
 deletes a specific ninja from the db
```
