## 3. Customizing Create React App : *Redux*

### Create React App + Redux
Getting started customizing `publish-react-app-advanced` .

#### Add yarn modules : *redux and others*
```bash
# Current path : ~/publish-react-app-advanced
yarn add redux react-redux react-router-dom react-router-redux@next redux-thunk
```

#### Create directory and js file : *modules*
```bash
# Current path : ~/publish-react-app-advanced/src
mkdir modules
```

```js
// File path : ~/publish-react-app-advanced/src/modules/index.js
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  routing: routerReducer
})
```
#### Add js file : *store.js*
```js
// File path : ~/publish-react-app-advanced/src/store.js
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

#### Edit js file : *index.js*
```diff
# File path : ~/publish-react-app-advanced/src/index.js
+ import { Provider } from 'react-redux';
+ import { ConnectedRouter } from 'react-router-redux';
+ import store, { history } from './store';
```

#### Edit js file : *app.js*
```diff
# File path : ~/publish-react-app-advanced/src/app.js
+ import { Route, Link } from 'react-router-dom';
```
