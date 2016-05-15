import routes from './Router';
import React from 'react';
import ReactDom from 'react-dom';

import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux'

import { Router,useRouterHistory } from 'react-router';
import { createHistory } from 'history'

import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import {configureStore,DevTools} from '../store';
console.log(window.location);
const browserHistory = useRouterHistory(createHistory)({
  basename: "/moses"
});

const store = configureStore(browserHistory, window.__initialState__);


const history = syncHistoryWithStore(browserHistory, store)

var render =(
  <Provider store={store}>
      <Router routes={routes} history={history}/>
  </Provider>
);
ReactDom.render(render,document.getElementById('container'));

// ReactDom.render(
//   <Provider store={store}>
//     <DevTools/>
//   </Provider>,
//   document.getElementById('devtools')
// )
