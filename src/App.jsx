import { useEffect, useState } from "react";

import Note from "./Note";

import "./App.css";
import { createNote, getNotes } from "./services/notes.services";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNotes] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("consultando");
    setLoading(true);
    getNotes().then((notes) => {
      console.log(notes);
      setNotes(notes);
      setLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    setNewNotes(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteAddtoState = {
      title: `creando nota nueva`,
      body: newNote,
      userId: 1,
    };
    console.log(noteAddtoState);
    createNote(noteAddtoState).then((newNote) =>
      setNotes((prevNotes) => prevNotes.concat(newNote))
    ).catch((e) => {
      console.log(e);
    });

    setNewNotes("");
  };

  return (
    <div>
      <h1>Notes</h1>
      {loading ? "Cargando" : ""}
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={newNote}
          placeholder="nota"
        />
        <button>crear nota</button>
      </form>
    </div>
  );
}

export default App;
