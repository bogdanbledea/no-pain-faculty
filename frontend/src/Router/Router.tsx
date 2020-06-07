import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Homepage from '../pages/Homepage/Homepage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
