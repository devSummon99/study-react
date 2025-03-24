import { useState } from 'react'

import './App.css'

function App(props) {
  const [notes, setNotes] = useState(props.notes);
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
     </div>
    </>
  )
}

export default App
