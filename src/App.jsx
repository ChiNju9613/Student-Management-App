import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import StudentForm from './components/StudentForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <StudentForm />
    </>
  )
}

export default App
