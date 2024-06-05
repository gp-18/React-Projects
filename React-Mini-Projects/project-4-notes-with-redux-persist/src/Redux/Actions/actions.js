import { ADDNOTES , DELETENOTES } from "./actionTypes"

export const addNote = (text)=>{
  return {
    type: ADDNOTES,
    payload: text,
  }
}

export const deleteNote = (id)=>{
  return {
    type: DELETENOTES,
    payload: id,
  }
}

