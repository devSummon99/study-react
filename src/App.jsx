import { useEffect, useState } from "react";
import Note from "./Note";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNotes] = useState("");
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("consultando");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setNotes(json);
      });
  }, []);

  const handleChange = (e) => {
    setNewNotes(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let id = Math.random(1);

    const noteAddtoState = {
      id: id,
      title: `creando nota ${id}`,
      body: newNote,
    };
    console.log(noteAddtoState);
    setNotes(notes.concat(noteAddtoState));
    setNewNotes("");
  };

  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} placeholder="nota"/>
        <button>crear nota</button>
      </form>
    </div>
  );
}

export default App;
