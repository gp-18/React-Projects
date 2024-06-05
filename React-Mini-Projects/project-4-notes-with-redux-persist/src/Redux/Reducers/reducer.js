import { ADDNOTES, DELETENOTES } from "../Actions/actionTypes";

const initalState = {
  todo: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADDNOTES:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case DELETENOTES:
      return {
        ...state,
        todo: state.todo.filter((_, index) => index !== action.payload),
      }
    
    default:
      return state;
  }
};

export default reducer;
