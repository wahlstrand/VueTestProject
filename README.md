# Vue Test Project

This program runs against the CoinCap [API](https://docs.coincap.io/?version=latest) to list the top 500 cryptos sorted by ranking.

Any selected cryptos are live updated to show the current price in USD.

The project is tested with node 12.13.1, as there seems to be issues to run it with newer versions of node.  

[How to switch node versions.](https://github.com/nvm-sh/nvm/blob/master/README.md)


## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install dependencies for Vue Test Project
```
npm install
```

## Usage
Use npm to run the project
```
npm run serve
```

The project is available on http://localhost:8080/

## Run unit tests
There are a few unit tests to test components, you can run them with one of these commands
```
npm run unit
```
During test development you can use the watch command to keep running the tests as you write new testcode 
```
npm run unit:watch 
```
## How to build for production
If you want to build this for production use this command, output is put in the dist-folder
```
npm run build
```

## Built with
* [Vue](https://vuejs.org/) - The progressive Javascript framework
* [Mocha](https://mochajs.org/) - The fun, simple, flexible JavaScript test framework
* [CoinCap](https://docs.coincap.io/?version=latest) - Real-time cryptocurrency market cap rankings, trading charts, and more.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

![](https://img.shields.io/badge/vue-4.1.1-green.svg)