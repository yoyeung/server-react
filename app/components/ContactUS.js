import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
 class  ContactUS extends React.Component{
  constructor(){
    super();
  }
  shouldComponentUpdate(nextProps,nextState){

    return true;
  }

  render(){
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       counter: this.props.counter
     })
    );
    return (
      <div>
        <h1>Contact US</h1>
          <Link to='contact'>Contact US</Link>
          <Link to='about'>About</Link>
        {childrenWithProps}
      </div>
    );
  }
}
export default connect((state,props)=>{
  return {...state,fuck:"fuck you"};
})(ContactUS);
