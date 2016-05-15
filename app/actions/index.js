'use strict';
export const addRemark = (text)=>{
  return {
    type: 'ADD_REMAKR',
    text: text
  };
}

export const updateReamrk = (text)=>{
  return {
    type: 'UPDATE_REMARK',
    text:text
  }
}

export const addCounterOne = ()=>{
  return {
    type: 'ADD_COUNTER_ONE',
    value:1000
  }
}
