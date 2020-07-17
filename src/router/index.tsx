import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from 'history'
import HomePage from "../components/HomePage";
import Pokemon from "../components/pokemon/Pokemon";

import { NavBar } from "../components/layout/NavBar";
import  SignIn  from "../components/auth/SignIn";

export const history = createBrowserHistory();


// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => (
  <Router history={history}>
    <Fragment>
    <NavBar/>
    <SignIn/>
    <div className='container'>
        <Switch>
          <Route path="/" component={Pokemon} />
        </Switch>
      </div>
    </Fragment>
  </Router>
);

export default AppRouter;
