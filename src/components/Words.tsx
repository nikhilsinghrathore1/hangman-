import React from 'react'

const alphabets = [
               "a",
               "b",
               "c",
               "d",
               "e",
               "f",
               "g",
               "h",
               "i",
               "k",
               "l",
               "m",
               "n",
               "o",
               "p",
               "q",
               "r",
               "s",
               "t",
               "u",
               "v",
               "w",
               "x",
               "y",
               "z",
]

type wordProp={
  incorrectWords:string[] , 
  activeLetter:string[] , 
  addwords:(letter:string)=>void
  disable:boolean,
}

const Words = ({incorrectWords , activeLetter , addwords , disable}:wordProp) => {
  return (
    <div className='w-full flex flex-wrap gap-3 mt-10 justify-center'>
               {alphabets.map((e,i)=>(
                              <button disabled={disable} onClick={()=>addwords(e)} className='w-16 uppercase font-bold border-2 border-black/50 hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white rounded h-12 text-2xl'>{e}</button>
               ))}
    </div>
  )
}

export default Words