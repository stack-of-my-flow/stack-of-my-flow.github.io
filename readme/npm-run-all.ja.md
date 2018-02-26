# npm-run-allとは
> 公式 : [npm-run-all](https://www.npmjs.com/package/npm-run-all)

## 概要
導入前 : `npm run clean && npm run build:css && npm run build:js && npm run build:html`  
導入後 : `npm-run-all clean build:*`  
複数の**npm-scripts**を実行するためのコマンドラインツール

## インストール方法
```bash
npm install node-run-all --save-dev
```

## つかい方
 ```
Usage:
    $ npm-run-all [--help | -h | --version | -v]
    $ npm-run-all [実行タスク] [オプション]

    実行タスクを、並行 or 順次に実行
    
Options:
    -p, --parallel [実行タスク]   - 実行タスクを、並列実行
    -s, --sequential [実行タスク] - 実行タスクを、順次実行
```