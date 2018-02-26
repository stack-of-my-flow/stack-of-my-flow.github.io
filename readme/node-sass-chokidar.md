# About node-sass-chokidar
> Official : [node-sass-chokidar](https://www.npmjs.com/package/node-sass-chokidar)

## Overview
A thin wrapper module around [node-sass](https://www.npmjs.com/package/node-sass) executable to use [chokidar](https://www.npmjs.com/package/chokidar) instead of [Gaze](https://www.npmjs.com/package/gaze) when watching files.

## Installation
```bash
npm install node-sass-chokidar --save-dev
```

## Usage
```bash
node-sass-chokidar src/ -o src/ --watch --recursive 
```

→ `.sass` files is compiled to `.css` under `/src` directory.