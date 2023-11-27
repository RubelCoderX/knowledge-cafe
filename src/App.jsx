import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Reader from './Reader/Reader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
     <Header></Header>
     <Reader></Reader>
    </div>
  )
}

export default App
