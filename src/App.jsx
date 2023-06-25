import { useState } from 'react'

import './App.css'
import Game from './components/Game/Game'

function App() {
  const [count, setCount] = useState([])
  return (
    <>
      <h1 className=' text-center text-2xl text-emerald-700 font-bold py-5 uppercase'>Tic Tac Toe Game</h1>
      <Game />
    </>
  )
}

export default App
