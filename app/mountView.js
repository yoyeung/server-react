import routes from './Router';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router'
ReactDom.render(<Router routes={routes} history={browserHistory}/>,document.getElementById('container'));
