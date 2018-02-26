## 3. Integrate with Polymer
### 3-1. Create directory and js file : polymer
```bash
# Current path : ~/publish-react-project
mkdir polymer
cd polymer
polymer init

❯ polymer-2-element - A simple Polymer 2.0 element template # ( Choose this )
? Element name polyreact-element # ( Any name you like )
? Brief description of the element React App with Polymer # ( Optional )
```

### 3-2. Create symbolic link to polymer from public
```bash
# Current path : ~/publish-react-project/public
ln -s ../polymer .
```

### 3-3. See polymer demo page : polymer-element
#### 3-3-1. bower install
```bash
# Current path : ~/publish-react-project/polymer
bower install
```

#### 3-3-2. Rewrite URL path to bower_conponents
```diff
# File path : ~/publish-react-project/demo/index.html
- <script src="../../webcomponentsjs/webcomponents-lite.js"></script>
+ <script src="../bower_conponents/webcomponentsjs/webcomponents-lite.js"></script>

- <link rel="import" href="../../iron-demo-helpers/demo-pages-shared-styles.html">
- <link rel="import" href="../../iron-demo-helpers/demo-snippet.html">
+ <link rel="import" href="../bower_components/iron-demo-helpers/demo-pages-shared-styles.html">
+ <link rel="import" href="../bower_components/iron-demo-helpers/demo-snippet.html">
```
```diff
# File path : ~/publish-react-project/polymer/polyreact-element.html
- <link rel="import" href="../polymer/polymer-element.html">
+ <link rel="import" href="/polymer/bower_components/polymer/polymer-element.html">
```

#### 3-3-3. Serve demo page
```bash
# Current path : ~/publish-react-project/polymer
polymer serve
```

→ Open http://localhost:8081 to see demo page of `polyreact-element` .

![publish-react-app-screen-shot](https://c1.staticflickr.com/5/4495/37557803802_285453c034_b.jpg)

### 3-4. Edit index.html of react app
```bash
# File path : ~/publish-react-project/public/index.html
+ <script src="/polymer/bower_components/webcomponentsjs/webcomponents-lite.js"></script>
+ <link rel="import" href="/polymer/polyreact-element.html">
```

### 3-5. Edit Featured.js of react app
```diff
# File path : ~/publish-react-project/src/container/Featured.js
return (
-     <main><h1>Featured</h1></main>
+     <main><polyreact-element></polyreact-element></main>
);
```

### 3-6. Design
[Source changes](https://github.com/KoheiShingaiHQ/react-with-polymer/commit/79cadf5c0d243dc7f18e5aa4ce5d776a5f8d83c7)

### 3-7. Serve react app
```bash
# Current path : ~/publish-react-project/
npm start
```

→ open http://localhost:3000 to see `react app with polymer` .

![react-with-polymer](https://c1.staticflickr.com/5/4482/36920034213_7f2a802b66_b.jpg)