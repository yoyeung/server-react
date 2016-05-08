import React from 'react';
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
    <div id=app>${appHtml}</div>
    <script src="/js/bundle.js"></script>
   `
}


export default (req,res)=>{
  // match the routes to the url
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // `RouterContext` is the what `Router` renders. `Router` keeps these
    // `props` in its state as it listens to `browserHistory`. But on the
    // server our app is stateless, so we need to use `match` to
    // get these props before rendering.
    const appHtml = renderToString(<RouterContext {...props}/>)

    // dump the HTML into a template, lots of ways to do this, but none are
    // really influenced by React Router, so we're just using a little
    // function, `renderPage`
    res.send(renderPage(appHtml))
  })
}
