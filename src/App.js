import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

import Form from './containers/Form'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path='/:practice/:form' component={Form} />
    </ConnectedRouter>
  </Provider>
)

export default App
