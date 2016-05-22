import React from 'react';
import '../sass/HelloForm.scss';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {addCounterOne} from '../actions';
 class  CounterApp extends React.Component{
  constructor(){
    super();
  }
  componentDidMount(){
    // setInterval(
    //   ()=>{
    //     this.props.tick();
    //   },1000
    // );
  }
  render(){

    return (
      <div>
        <h1>Wellcome home</h1>
        <Link to='contact'>Contact US</Link>
        <Link to='about'>About</Link>
        {this.props.children}
      </div>
    );
  }
}
var App = connect((state,ownProps)=>{

  return state;
},(dispatch,ownProps)=>{
  return {
    tick: ()=>{
      dispatch(addCounterOne());
    }
  };
})(CounterApp);
// var App = CounterApp;
export  {App};
