import React, { useState } from 'react'


type guessProp={
  wordToguess : string,
  guessedWord :string[],
  reveal:boolean
}
const Guessing = ({wordToguess  , guessedWord , reveal}:guessProp) => {
              //  const [guessed, setguessed] = useState(["t" , 's'])
       

  return (
    <div className='text-6xl mt-5 font-bold uppercase'>
               {wordToguess.split("").map((e,i)=>(
                              <span className='border-b-[5px] mr-3 w-14 text-center inline-block border-black'>
                                             <span className={`${guessedWord.includes(e)|| reveal?"visible":"invisible"} ${guessedWord.includes(e) &&reveal?"text-black":"text-red-500"}`}>{e}</span>
                              </span>
               ))}
    </div>
  )
}

export default Guessing