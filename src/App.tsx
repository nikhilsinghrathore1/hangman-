import React, { useCallback, useEffect, useState } from 'react'
import './App.css'
import words from "./words.json"
import Drawing from './components/Drawing'
import Guessing from './components/Guessing'
import Words from './components/Words'

function App() {
  const [word, setword] = useState(()=>words[Math.floor(Math.random()*words.length)])
  console.log(word)
  const [guessed, setguessed] = useState<string[]>([])
  console.log(guessed)

  const incorrectWords = guessed.filter(e=>!word.includes(e));
  const isLosser = incorrectWords.length>6;
  
  const iswinner = word.split("").every(e=>guessed.includes(e));

  const addguessedLetter = useCallback((e:string)=>{
    if(guessed.includes(e) || isLosser || iswinner)return
    setguessed(prev=>[...prev,e])
  },[guessed , isLosser , iswinner])


  useEffect(() => {
    const handler = (e:KeyboardEvent)=>{
          const key = e.key;
          console.log(key)
          if(!key.match(/^[a-z]$/)) return

          e.preventDefault()
          addguessedLetter(key);
    }
    window.addEventListener("keypress",handler)

    return () => {
      window.removeEventListener("keypress",handler)
    }
  }, [guessed])
  
  
  return (
    <>
    <div className="w-[900px] h-screen flex flex-col items-center justify-start p-2 mx-auto">
      <div className="text-xl font-bold uppercase h-10">
      {isLosser && "you lose"}
      {iswinner&& "you win "}
      </div>
      <Drawing numberOfguess = {incorrectWords.length}/>
      <Guessing wordToguess ={word}  guessedWord = {guessed} reveal={isLosser}/>
      <Words activeLetter = {guessed.filter(e=>word.includes(e))}  incorrectWords ={incorrectWords} addwords = {addguessedLetter} disable ={isLosser || iswinner}/>
      
    </div>
    </>
  )
}

export default App
