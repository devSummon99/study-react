import { useState } from 'react'

import './App.css'

function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNotes] = useState("");
  /*
  const [count, setCount] = useState({
     left : 0,
     right : 0,
     clicks : 0
  });

  const [clicker, setClicker] = useState([]);

  const handleClickLeft = () => {
  const newCounters = {
    ... count, 
    left: count.left +1 ,
    clicks : count.clicks +1
  };
  setCount(newCounters);
  setClicker(prevClickers => ([...prevClickers, "L"]))
  }

  const handleClickRight = () => {
    setCount({
      ...count,
      right: count.right +1,
      clicks: count.clicks +1
    })
    setClicker(prevClickers => ([...prevClickers, "R"]))
  }
*/
const handleChange = (e) => {
setNewNotes(e.target.value);
}

const handleSubmit = (event) => {
  event.preventDefault()
  let id =  Math.random(1);
  console.log(notes.lenght)
 
  const noteAddtoState = {
   id:id,
   title: `creando nota ${id}`,
   description: newNote,
   creationDate: new Date().toISOString(),
  }
  console.log(noteAddtoState);
  setNotes(notes.concat(noteAddtoState));
  setNewNotes("")

 /*
    id: 1, 
    title: "Meeting Notes",
    description: "Discuss project milestones and deadlines.",
    creationDate: "2023-03-01"
  },*/


}
  return (
    <>
      {/*<div>
       {count.left}
       <button onClick={handleClickLeft}>left</button>
       <button onClick={handleClickRight}>right</button>
       {count.right}
       <p>Clicks totales: {count.clicks}</p>
       <p>{clicker.join(", ")}</p>
      </div>
     */}

     <div>
      {notes.map((note) => (
        <div key={note.id} className="note">
          <h2>{note.title}</h2>
          <p>{note.description}</p>
          <p>{note.creationDate}</p>
        </div>
      ))}

    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={newNote}/>
      <button >crear nota</button>
      </form>
     </div>
    </>
  )
}

export default App
