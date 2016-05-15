import React from 'react';
import {App,ContactUS,ContactUSD,About} from './components';
import { Router, Route,IndexRoute,NotFoundRoute,Redirect } from 'react-router';
import reducer from './reducers';



export default (

    <Route  path='/' component={App}>
      <Route path='/contact' component={ContactUS}>
          <Route path='detail' component={ContactUSD}/>
      </Route>
      <Route path='/about' component={About}/>
    </Route>

);
