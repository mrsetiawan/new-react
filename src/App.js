import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import MainRouter from './router'

const App = () => {
  return (
    <BrowserRouter>
      {MainRouter.map((route, index) => {
        return (
          <Fragment key={index}>
            {/* <Route exact key={index} path={route.path} component={route.component} /> */}
            <Route exact {...route} />
          </Fragment>
        )
      })}

    </BrowserRouter>
  )
}

export default App;
