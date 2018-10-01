# Boilerplate React + Redux + Firebase

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This boilerplate aim to init any project employing React, Redux and Firebase.
In addition it adds some helpful tools in order to improve your code and make easy and fun your development workflow.

## Tools included

**Bundler**

- [Webpack 4](https://webpack.js.org/concepts/) with following plugins:
  - HtmlPlugin
  - MiniCssPlugin
  - CleanWebpackPlugin
  - DefinePlugin

**Code style standards tools**

- [ESLint](https://eslint.org/) with [Airbnb's standards](https://github.com/airbnb/javascript/tree/master/react)
- [Prettier](https://github.com/prettier/prettier)

**Workflow tools**

- [Commitizen](https://github.com/commitizen/cz-cli) with [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)
- [Husky](https://github.com/typicode/husky),
- [linted staged](https://github.com/okonet/lint-staged),

**Testing tools and frameworks**

- [Jest](https://jestjs.io/)
- [Enzyme](https://github.com/airbnb/enzyme)

## Configuration

Generate your .env file by running the following command:

```
$ cp .env .env.example
```

next add your firebase envars and others in the .env file

```
FIREBASE_API_KEY={YOUR_API_KEY}
FIREBASE_AUTH_DOMAIN=={YOUR_AUTH_DOMAIN}
FIREBASE_DATABASE_URL={OUR_DATABASE_URL}
FIREBASE_PROJECT_ID={YOUR_PROJECT_ID}
FIREBASE_STORAGE_BUCKET={YOUR_STORAGE_BUCKET}
FIREBASE_MESSAGING_SENDER_ID={YOUR_MESSAGING_SENDER_ID}
```

## Installation and running

**In Development environment**

Run the following commands in your terminal:

```
$ yarn
$ yarn start
```

**In Production environment**

Run the following commands in your terminal:

```
$ yarn
$ yarn build
```

## Testing

**Configuration**

Generate your .env.testing file in order to test by running the following command:

```
$ cp .env.testing .env.example
```

next add your envars to the .env.testing file

> Remember: This envars are only for testing purpose.

**Running tests**

Run the following command in your terminal:

```
$ yarn test
```

or

```
$ yarn test -- --watch
```
