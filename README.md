# TradingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.
This project is a currency dashboard that will show the different currency pairs and if they are in an upwards trend or downwards.
Since testing with some real data was required, both a backend and a frontend were created, the backend using NodeJS and the frontend using Angular 6 CLI. In order to see the results the backend needs to be started first, and after that the front end.

## Backend development server

Go to the backend folder, first run `npm install` for it to install the dependencies, and then run `node main.js`. That will start a server listening in `http://localhost:3000`.

## Frontend development server

Go to the frontEnd folder, run `npm install` to install the dependencies and after that, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Frontend Build

Go to the frontEnd folder and run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running front-end unit tests

Go to the frontEnd folder and run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
