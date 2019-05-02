# Startup

## Server

```bash
cd api
yarn install
yarn start # To launch a dev server, use 'yarn dev' instead
```

> Note : You can create a `.env` file and specify your own values for `TOKEN_SECRET` and `TOKEN_DURATION` (in seconds). 

## UI

```bash
cd ui
yarn install
yarn serve
```

## Creating users

You can create users in the **signup** page. Login is reserved for already existing members. Error messages will help direct you throught the process if anything goes wrong. 

> Note : the user `user` with the password `password` will always be available. 