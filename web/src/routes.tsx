import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-point" exact component={CreatePoint} />
        <Route path="*" component={() => <h1 id="notFound">Page not Found</h1> } />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
