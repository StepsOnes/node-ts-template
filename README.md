## Node.js TypeScript Starter

### Description
This is a starter project for Node.js applications written in TypeScript. It includes a basic setup with npm scripts for development and production environments.

## Setup
```bash
# install dependencies
$ npm install
```

### Environment variables
Create a `.env` file in the root directory of the project. This file will be used to set environment variables for the application. The `.env` file should not be committed to the repository.

```bash
# .env
NODE_ENV=development
PORT=3000
```


## Running the app

```bash
# watch mode
$ npm run dev

# build production
$ npm run build

# production mode
$ npm run start
```