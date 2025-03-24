import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const notes = [
  {
    id: 1,
    title: "Meeting Notes",
    description: "Discuss project milestones and deadlines.",
    creationDate: "2023-03-01"
  },
  {
    id: 2,
    title: "Shopping List",
    description: "Milk, Bread, Eggs, Butter.",
    creationDate: "2023-03-02"
  },
  {
    id: 3,
    title: "Workout Plan",
    description: "Monday: Cardio, Wednesday: Strength, Friday: Yoga.",
    creationDate: "2023-03-03"
  }
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App  notes={notes}/>
  </StrictMode>,
)
