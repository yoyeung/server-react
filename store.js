import React from 'react'
import * as reducers from './app/reducers';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import { routerReducer, routerMiddleware } from 'react-router-redux';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'


export const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

export function configureStore(history, initialState) {
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
  })

  let devTools = [];
   if (typeof document !== 'undefined') {
     devTools = [ DevTools.instrument() ]
   }

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history)
      ),
      ...devTools
    )
  )

  return store
}
