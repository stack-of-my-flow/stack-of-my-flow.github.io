## 3. Polymer との統合
### 3-1. フォルダとjsファイルの作成 - *polymer*
```bash
# カレントディレクトリ : ~/publish-react-project
mkdir polymer
cd polymer
polymer init

❯ polymer-2-element - A simple Polymer 2.0 element template # ( これを選択 )
? Element name polyreact-element # ( 自由な名前を設定 )
? Brief description of the element React App with Polymer # ( 任意 )
```

### 3-2. シンボリックリンクの作成 - *polymer → public*
```bash
# カレントディレクトリ : ~/publish-react-project/public
ln -s ../polymer .
```

### 3-3. デモページの確認 - *polymer-element*
#### 3-3-1. bower install
```bash
# カレントディレクトリ : ~/publish-react-project/polymer
bower install
```

#### 3-3-2. URL のパスを *bower_conponents* へ書き換える
```diff
# ファイルパス : ~/publish-react-project/demo/index.html
- <script src="../../webcomponentsjs/webcomponents-lite.js"></script>
+ <script src="../bower_components/webcomponentsjs/webcomponents-lite.js"></script>

- <link rel="import" href="../../iron-demo-helpers/demo-pages-shared-styles.html">
- <link rel="import" href="../../iron-demo-helpers/demo-snippet.html">
+ <link rel="import" href="../bower_components/iron-demo-helpers/demo-pages-shared-styles.html">
+ <link rel="import" href="../bower_components/iron-demo-helpers/demo-snippet.html">
```
```diff
# ファイルパス : ~/publish-react-project/polymer/polyreact-element.html
- <link rel="import" href="../polymer/polymer-element.html">
+ <link rel="import" href="/polymer/bower_components/polymer/polymer-element.html">
```

#### 3-3-3. デモページの起動
```bash
# カレントディレクトリ : ~/publish-react-project/polymer
polymer serve
```

→ http://localhost:8081 を開くと、 `polyreact-element` の内容が表示されます。

![publish-react-app-screen-shot](https://c1.staticflickr.com/5/4495/37557803802_285453c034_b.jpg)

### 3-4. React側 - *index.html* を編集
```bash
# ファイルパス : ~/publish-react-project/public/index.html
+ <script src="/polymer/bower_components/webcomponentsjs/webcomponents-lite.js"></script>
+ <link rel="import" href="/polymer/polyreact-element.html">
```

### 3-5. React側 - *Featured.js* を編集
```diff
# ファイルパス : ~/publish-react-project/src/container/Featured.js
  return (
-     <main><h1>Featured</h1></main>
+     <main><polyreact-element></polyreact-element></main>
  );
```

### 3-6. デザイン調整
[変更内容](https://github.com/KoheiShingaiHQ/react-with-polymer/commit/79cadf5c0d243dc7f18e5aa4ce5d776a5f8d83c7)

### 3-7. React の起動
```bash
# カレントディレクトリ : ~/publish-react-project/
npm start
```

→ http://localhost:3000 を開くと、 `React + Polymer` が表示されます。

![react-with-polymer](https://c1.staticflickr.com/5/4482/36920034213_7f2a802b66_b.jpg)