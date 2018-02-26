# node-sass-chokidarとは
> 公式 : [node-sass-chokidar](https://www.npmjs.com/package/node-sass-chokidar)

## 概要
[Gaze](https://www.npmjs.com/package/gaze)の代わりに、[chokidar](https://www.npmjs.com/package/chokidar)を使用した、
[node-sass](https://www.npmjs.com/package/node-sass)の軽量化モジュールです。

## インストール方法
```bash
npm install node-sass-chokidar --save-dev
```

## つかい方
```bash
node-sass-chokidar src/ -o src/ --watch --recursive 
```

→ `/src` フォルダ以下の `.sass` ファイルが、`.css` に変換されます。