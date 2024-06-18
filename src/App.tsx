import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import words from "./words.json"

function App() {
  const [word, setword] = useState(()=>words[Math.floor(Math.random()*words.length)])
  console.log(word)
  const [guessed, setguessed] = useState(word[0])
  console.log(guessed)

  return (
    <>
     <h1>hello world</h1>
    </>
  )
}

export default App
