import React from 'react';
import {GroupItem} from './GroupItem';
import {GroupRadio} from './GroupRadio';
export class  About extends React.Component{
  constructor(){
    super();
    this.state={
      data:"item",
      groups:[
        {label:'item',value:"item"},
        {label:'item2',value:"item2"},
        {label:'item3',value:"item3"}
      ]
    };
    this.updateChild = this.updateChild.bind(this);
  }
  updateChild(value,e){
     e.stopPropagation();
    console.log(value);
    this.setState({data:value});

  }
  render(){
    return (
      <div>
        <h1>About</h1>
        <GroupRadio updateData={this.updateChild}
          initValue={this.state.data}
          selection={this.state.groups}
          name="far"
          addBefore={
            (
              <label> Group</label>
            )
          }
        >
        </GroupRadio>
      </div>
    );
  }
}
