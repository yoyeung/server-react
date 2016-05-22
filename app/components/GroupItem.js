import React from 'react';
export class GroupItem extends React.Component{
  constructor(){
    super();
  }
  shouldComponentUpdate(nextProps,nextState){
    return true;//this.props.initValue !== nextProps.initValue;
  }
  render(){
    let isMatch = (this.props.value === this.props.initValue);
    let  className='group-item '+ ((isMatch) ? "match": "");
    return (
      <div className={className} onClick={this.props.onClick.bind(null,this.props.value)} >
        <label>
          {this.props.label}
        </label>
      </div>
    );
  }
}
GroupItem.propTypes ={
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  initValue: React.PropTypes.string,
  onClick: React.PropTypes.func
};
