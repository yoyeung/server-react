import React from 'react/addons';
import { renderToString } from 'react-dom/server';
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router';
import routes from '../app/Router';

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id='container'>${appHtml}</div>
    <script src="/js/bundle.js"></script>
   `
}


export default (req,res)=>{
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log('Error', error);
      res.status(500).send(error);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      // const devTools = (isDev) ? <DevTools /> : null;
      const html = renderToString(
        <RouterContext {...renderProps} />
      );
      // res.render('index', { isProd: (!isDev), html: html });
      res.send(renderPage(html))
    } else {
      res.status(404).send('Not Found');
    }
  });
  // match({ routes: routes, location: req.url }, (err, redirect, props) => {
  //   // `RouterContext` is the what `Router` renders. `Router` keeps these
  //   // `props` in its state as it listens to `browserHistory`. But on the
  //   // server our app is stateless, so we need to use `match` to
  //   // get these props before rendering.
  //   const appHtml = renderToString(<RouterContext {...props}/>)
  //
  //   // dump the HTML into a template, lots of ways to do this, but none are
  //   // really influenced by React Router, so we're just using a little
  //   // function, `renderPage`
  //   res.send(renderPage(appHtml))
  // })
}
