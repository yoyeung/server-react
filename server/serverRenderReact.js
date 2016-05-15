import React from 'react';
import { renderToString } from 'react-dom/server';
// and these to match the url to routes and then render
import {createMemoryHistory, match, RouterContext ,useRouterHistory } from 'react-router';
import { createHistory, useBasename } from 'history'
import {  combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import routes from '../app/Router';
import {configureStore} from '../store';
import { syncHistoryWithStore } from 'react-router-redux';
import serialize from 'serialize-javascript';

function renderPage(appHtml,store) {
  return `
    <!doctype html public="storage">
    <html>
    <head>
    <meta charset=utf-8/>
    <title>My First React Router App</title>

    <head>
    <body>
    <div id='container'>${appHtml}</div>
    <script src="/js/bundle.js"></script>
    <script >
      window.__initialState__=${serialize(store.getState())};
    </script>
    </body>
    </html>
   `
}


export default (req,res)=>{
  const memoryHistory = createMemoryHistory(req.url);
  const store = configureStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);
  // const history = useRouterHistory(useBasename(createHistory))({
  //   basename: "moses"
  // });
  match({history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log('Error', error);
      res.status(500).send(error);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      // const devTools = (isDev) ? <DevTools /> : null;
      const html = renderToString(
        <Provider store={store}>
           <RouterContext {...renderProps} />
        </Provider>
      );
      // res.render('index', { isProd: (!isDev), html: html });
      res.send(renderPage(html,store))
    } else {
      res.status(404).send('Not Found');
    }
  });

}
