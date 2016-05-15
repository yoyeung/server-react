import {shortid} from 'shortid';
const remark = (state ,action) =>{
  switch (action.type) {
    case 'ADD_REMAKR':
      return {
        text: action.text,
        id:shortid.generate()
      }
      break;
    case 'EDIT_REMAKR':
      if(state.id === action.id){
        return {
          ...state,
          text: action.text
        }
      }
      break;
    default:
      return state;

  }
}

const remarks = (state=[],action)=>{
  switch (action.type) {
    case 'ADD_REMARK':
      return [
        ...state,
        remark(undefined,action)
      ];
      break;
    case 'EDIT_REMARK':
      return state.map(t=>remark(t,action));
      break;
    case 'DELETE_REMARK':
    return state.filter(t => t.id !== action.id);
    default:
      return state;

  }
}
const counter= (state=0,action)=>{
  switch (action.type) {
    case 'ADD_COUNTER_ONE':
      return state+action.value;
      break;
    default:
      return state;

  }
}
export  {remarks,counter};
