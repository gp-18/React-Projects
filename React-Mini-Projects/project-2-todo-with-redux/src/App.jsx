import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { addToDo , deleteToDo } from "./Redux/Actions/action";

const App = () => {
  const [todos , setTodos] = React.useState("");
  const dispatch = useDispatch();

  const todoList = useSelector((state)=>state.todos);
  
  const handleToDoSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(todos));
    setTodos(""); 
  };

  return (
    <>
      <form onSubmit={handleToDoSubmit}>
        <input type="text" value={todos} onChange={(e)=>setTodos(e.target.value)}/>
        <button type="submit">submit</button>
      </form>

      {
        todoList.map((item , index) =>{
          return(
            <div key={index}>
              <h1>{item}</h1>
              <button onClick={()=>dispatch(deleteToDo(index))}>delete</button>
            </div>
          )
        })
      }
    </>
  );
};

export default App;
