import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addNote, deleteNote } from "./Redux/Actions/actions"

const App = () => {
  const [note, setNote] = React.useState({ title: "", description: "" });
  const dispatch = useDispatch();

  const notes = useSelector(state => state.todo);
  console.log(notes);

  const handleNote = (e) => {
    e.preventDefault();
    dispatch(addNote({ id: Date.now(), ...note }));
    setNote({ title: "", description: "" });
  }

  return (
    <>
      <h1>Notes Application</h1>
      <form onSubmit={handleNote}>
        <input
          type="text"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          value={note.description}
          onChange={(e) => setNote({ ...note, description: e.target.value })}
          placeholder="Description"
        />
        <button type='submit'>Submit</button>
      </form>
      {
        notes.map((data, index) => {
          return (
            <div key={index}>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <button onClick={() => dispatch(deleteNote(index))}>Delete</button>
            </div>
          )
        })
      }
    </>
  )
}

export default App;
