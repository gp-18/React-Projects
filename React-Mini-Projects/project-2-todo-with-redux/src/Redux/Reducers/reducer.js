import { ADDTODO, DELETETODO } from "../Actions/actionTypes";

const initalState = {
  todos: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETETODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
