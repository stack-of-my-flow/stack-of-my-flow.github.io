## 6. Deploy to GitHub
### Browser history → Hash history
#### GitHub
[Source changes](https://github.com/KoheiShingaiHQ/publish-react-project/commit/02e03a5c09f6bb24e873845adc4d95af9a20a3d7)

#### #/ : Featured
![after-hash-featured](https://c1.staticflickr.com/5/4512/37573145681_4ef03be7be_b.jpg)

#### #/about : About
![after-hash-about](https://c1.staticflickr.com/5/4448/37573146031_08c75cec20_b.jpg)

#### #/article : Article
![after-hash-article](https://c1.staticflickr.com/5/4468/36862910134_48e0515184_b.jpg)

### Preparation
```bash
# Current path : ~/publish-react-project-advanced
npm i gh-pages --save-dev
```
```diff
# File path : ~/package.json
  {
    "name": "create-react-app",
    "version": "0.1.0",
+   "homepage": "https://[username].github.io/[your-repository-name]",

    "scripts": {
+     "deploy": "npm run build && gh-pages -d build"
```
### Deploy
```bash
# Current path : ~/publish-react-project-advanced
npm run deploy
```