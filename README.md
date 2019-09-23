# NgNowStarter

This project shows how we can use Angular CLI project with Zeit Now Dev Environemnt. [Demo](https://ng-now-starter.mbaljeetsingh.now.sh/)

## Checkout the tutorial
[![Going Full Stack with Angular and Zeit Now Dev Serverless](http://img.youtube.com/vi/ctpANunq6X0/0.jpg)](http://www.youtube.com/watch?v=ctpANunq6X0 "Going Full Stack with Angular and Zeit Now Dev Serverless")

## Prereqisites

Install Angular CLI and Zeit Now Globally on the local machine `npm install -g @angular/cli now` 

## Development server

Run `now dev` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## API (Serverless Functions)

You can create a new file inside the `api` directory. Then to access the function, you can go to `http://localhost:3000/api/{filename}`

## Deploy

Run `now` to deploy the project.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
