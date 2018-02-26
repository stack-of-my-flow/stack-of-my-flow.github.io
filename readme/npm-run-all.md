# About npm-run-all
> Official : [npm-run-all](https://www.npmjs.com/package/npm-run-all)

## Overview
Before : `npm run clean && npm run build:css && npm run build:js && npm run build:html`  
After : `npm-run-all clean build:*`  
A CLI tool to run multiple **npm-scripts**.

## Installation
```bash
npm install node-run-all --save-dev
```

## Usage
```
Usage:
    $ npm-run-all [--help | -h | --version | -v]
    $ npm-run-all [tasks] [OPTIONS]

    Run given `npm-scripts` in `parallel` or `sequential`.
    
Options:
    -p, --parallel [tasks]   - Run a group of tasks in parallel.
    -s, --sequential [tasks] - Run a group of tasks sequentially.
```