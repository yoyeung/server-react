import React,{Children} from 'react';
import {GroupItem} from './GroupItem';


export class GroupRadio extends React.Component{
  render(){
    return (
      <div className='group'>
        {this.props.addBefore}
        <input type='hidden' name={this.props.name} value={this.props.initValue}/>
        {this.props.selection.map((select, index)=>(<GroupItem key={index} initValue={this.props.initValue}{...select} onClick={this.props.updateData} ></GroupItem>))}
      </div>
    );
  }
}


GroupRadio.propTypes={
  // children: React.PropTypes.instanceOf(GroupItem),
  updateData: React.PropTypes.func,
  addBefore: React.PropTypes.node
}
