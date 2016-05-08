import React from 'react';
import { Router, Route,IndexRoute,NotFoundRoute,Redirect,Link, browserHistory } from 'react-router'
export class  App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <h1>Wellcome home 12</h1>
        <Link to='/moses/contact'>Contact US</Link> 
        <Link to='/moses/about'>About</Link>
        {this.props.children}
      </div>
    );
  }
}

export class  About extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}
export class  ContactUS extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (<div>
      <h1>Contact US</h1>
    </div>);
  }
}
export class  ContactUSD extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <h1>Contact US Detail</h1>
      </div>
    );
  }
}
export class  NotFound extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <h1>Wellcome NotFound</h1>
      </div>
    );
  }
}
