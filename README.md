<img alt="Git Flow" align="right" src="https://regexpressyourself.github.io/public/GitFlowLogo.png" width="400px"/>

# Git Flow

Learn to use git through a dynamic, interactive flowchart.

[See it live here!](https://smessina.com/gitflow/#/)

## Table of Contents

1. [Getting Started](#getting-started)
2. [Deployment](#deployment)
2. [Built With](#built-with)
3. [Contributing](#contributing)
3. [Authors](#authors)
3. [License](#license)


## Introduction

Git Flow walks you through a typical merge workflow with git. Git Flow presents each step needed to use git as an interactive flowchart. As the tutorial progresses, users choose paths that are relevant to their needs, making sure that unnesescary information gets filtered out.

## Getting Started

Git Flow uses Webpack and NPM to build and transpile all React code into regular HTML, CSS, and Javascript.

### Prerequisites

Make sure you have NodeJS and NPM installed. [You can download Node here](https://nodejs.org/en/download/). This will install NPM as well.

You are welcome to use [Yarn](https://yarnpkg.com/en/) instead of NPM if you prefer.

### Installing

First, clone the project to a local directory.

```
   git clone https://github.com/regexpressyourself/gitflow.git && cd gitflow
```

Next, install the dependencies using NPM or Yarn.

#### Using NPM

```
   npm install
```

#### Using Yarn

```
   yarn install
```

**[Back to top](#table-of-contents)**

## Deployment

### Development Environment

To run Git Flow in development mode, you will need to run the `start` script declared in `package.json`.

#### Using NPM

```
   npm run start
```

#### Using Yarn

```
   yarn run start
```

   That's it! Your development server is running at [http://localhost:8080](http://localhost:8080)
   
   Webpack is configured with hot reloading, so any changes saved to source files will be immediately reflected in the browser.

### Production Build

To build a production version of the app, with all React code loaded into a bundled, minified Javascript file, you need to run the `production` script declared in package.json.

#### Using NPM

```
   npm run production
```

#### Using Yarn

```
   yarn run production
```

   This will leave you with an `index.html` and an `index_bundle.js` file in the project root. Hosting these files from the same location will serve the production build of Git Flow.

**[Back to top](#table-of-contents)**

## Built With

* [React](https://facebook.github.io/react/) - The web framework that powers the site
* [Webpack](https://webpack.github.io/) - A module builder automate development and production build processes
* [React Router v. 3](https://reacttraining.com/react-router/) - Sits on top of React to enable route-based views without a backend server
* [Babel](https://babeljs.io/) - Transpiler to convert raw React code into browser-ready HTML and Javascript

**[Back to top](#table-of-contents)**

## Contributing

I'm always happy to receive pull requests, questions/issues regarding code, and feature requests on all my projects. Please feel free to open an issue or submit a pull request.

**[Back to top](#table-of-contents)**

## Authors

* **[Sam Messina](https://www.github.com/regexpressyourself)** - *Sole Developer* 

**[Back to top](#table-of-contents)**

## License

Git Flow is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


**[Back to top](#table-of-contents)**

