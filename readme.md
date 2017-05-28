# Express Server API

This is a simple API for educational purposes

## Install and Configuration

Before start you need to rename `.env.sample` to `.env` and modify the env variable called `DATABASE` with your database.

```
NODE_ENV=development
DATABASE=mongodb://localhost:27017/<DBname>
```

In terminal run `npm install` in order to install all the dependencies. Once all the dependencies are installed type `npm start`. 

Now you server is running in `http://localhost:3000`.

```bash
$ npm install
$ npm start
```

## Routes

| URL | HTTP verb | Request body | Action |
|-----|----------|-----------|--------|
| `/api/phones` | GET | (empty) | Returns all the phones |
| `/api/phones` | POST | JSON | Add a new phone |
| `/api/phones/:id` | GET | (empty) | Returns the specified phone |
| `/api/phones/:id` | PUT | JSON | Edits the specified phone |
| `/api/phones/:id` | DELETE | (empty) | Deletes the specified phone |

## Build


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
