## 3. Create React App - *Redux* の導入

### Create React App + Redux
`publish-react-project-advanced` を、カスタマイズしてみます。

### yarnモジュール - *redux* とその他のインストール
```bash
# カレントディレクトリ : ~/publish-react-project-advanced
yarn add redux react-redux react-router-dom react-router-redux@next redux-thunk
```

### フォルダとjsファイル - *modules* の作成
```bash
# カレントディレクトリ : ~/publish-react-project-advanced/src
mkdir modules
```

```js
// ファイルパス : ~/publish-react-project-advanced/src/modules/index.js
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  routing: routerReducer
})
```

### jsファイル - *store.js* の追加
```js
// ファイルパス : ~/publish-react-project-advanced/src/store.js
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
```

### jsファイル - *index.js* の編集
```diff
# ファイルパス : ~/publish-react-project-advanced/src/index.js
+ import { Provider } from 'react-redux';
+ import { ConnectedRouter } from 'react-router-redux';
+ import store, { history } from './store';
```

### jsファイル - *app.js* の編集
```diff
# ファイルパス : ~/publish-react-project-advanced/src/app.js
+ import { Route, Link } from 'react-router-dom';
```