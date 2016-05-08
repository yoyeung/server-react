import HelloSayer from './HelloSayer';
import React from 'react';
require('./sass/HelloForm.scss');
export default class HelloForm extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      name:'world'
    };
    this.onChange = this.onChange.bind(this);
  }
  render(){
    return (<div className="hello-form">
            <input type="text" onChange={this.onChange} />
            <HelloSayer name={this.state.name} />
        </div>);
  }
  onChange(e){
    this.setState({
        name: e.target.value
    });
  }
}
