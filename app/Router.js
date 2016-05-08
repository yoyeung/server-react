import React from 'react';
import {App,ContactUS,ContactUSD,About} from './package'
import { Router, Route,IndexRoute,NotFoundRoute,Redirect } from 'react-router'

export default (

    <Route  path='/moses' component={App}>
      <Route path='/moses/contact' component={ContactUS}>
          <Route path='/moses/contact/detail' component={ContactUSD}/>
      </Route>
      <Route path='/moses/about' component={About}/>
    </Route>

);
