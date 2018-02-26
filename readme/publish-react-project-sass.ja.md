## 2. Create React App - *CSS* のカスタマイズ

### CSS → Sass
`publish-react-project-advanced` を、カスタマイズしてみます。

#### npmモジュール - *node-sass-chokidar* のインストール
```bash
# カレントディレクトリ : ~/polyreact
npm install node-sass-chokidar --save-dev
```

#### npmモジュール - *npm-run-all* のインストール
```bash
# カレントディレクトリ : ~/polyreact
npm install npm-run-all --save-dev
```

#### package.json - *script* の編集
```diff
# ファイルパス : ~/publish-react-project-advanced/package.json
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build": "npm run build-css && react-scripts build",
+    "build-css": "node-sass-chokidar src/ -o src/",
+    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
```

#### カスタマイズ用 Sass ファイルをプロジェクトへ追加
```sass
/* ファイルパス : ~/publish-react-project-advanced/src/Custom.sass */
body
  background: powderblue
```

```diff
# ファイルパス : ~/publish-react-project-advanced/src/App.js
import './App.css';
+ import './Custom.css'
```

→ `npm start` 実行により、`/src` フォルダ以下の `.sass` ファイルが、`.css` に変換されます。  
→ http://localhost:3000 を開くと、 `polyreact` の内容が表示されます。

> 見本 : [koheishingaiHQ.github.io/create-react-app-with-sass](https://koheishingaihq.github.io/create-react-app-with-sass)

![create-react-app-with-sass-screen-shot](https://c1.staticflickr.com/5/4465/36878306283_8811ec8516_b.jpg)
