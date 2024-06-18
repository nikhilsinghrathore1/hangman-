import React from 'react'

const HEAD =(
               <div className='w-[60px] h-[60px] rounded-full absolute top-[40px] -right-[27px] border-[8px] border-black'></div>
)
const Body =(
               <div className='w-[8px] h-[100px]  absolute top-[100px] right-0  bg-black'></div>
)
const leftArm =(
               <div className='w-[8px] h-[70px]  absolute top-[80px] right-[27px] rotate-[120deg]  bg-black'></div>
)
const rightArm =(
               <div className='w-[10px] h-[70px]  absolute top-[80px] -right-[27px] -rotate-[120deg]  bg-black'></div>
)
const rightleg =(
               <div className='w-[10px] h-[70px]  absolute top-[182px] -right-[25px] -rotate-45  bg-black'></div>
)
const leftleg =(
               <div className='w-[8px] h-[70px]  absolute top-[182px] right-[25px] rotate-45  bg-black'></div>
)

const bodyParts =[HEAD , Body, leftArm , rightArm , leftleg , rightleg]

type guessProps={
  numberOfguess:Number
}

const Drawing:React.FC = ({numberOfguess}:guessProps) => {
  console.log(numberOfguess)
  return (
               
    <div className="relative mt-2">
            {bodyParts.slice(0,numberOfguess)}
               <div className='w-[8px] h-[40px] absolute right-0 bg-black'></div>
               <div className="h-[8px] w-[210px] ml-[110px] bg-black"></div>
               <div className="h-[290px] w-[8px] ml-[110px] bg-black"></div>
               <div className="h-[8px] w-[230px] bg-black"></div>
    </div>
  )
}

export default Drawing