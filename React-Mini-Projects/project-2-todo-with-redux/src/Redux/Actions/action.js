import { ADDTODO , DELETETODO } from "./actionTypes";

export const addToDo = (text)=>{
  return{
    type:ADDTODO,
    payload:text,
  }
}

export const deleteToDo = (id)=>{
  return{
    type:DELETETODO,
    payload:id,
  }
}