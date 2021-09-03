import React from 'react'
import CardBgImg from '../assets/cardBg.jpeg'

function Card({ children }) {
  return (
    <div className='card-container card-container-shadow bg-blue-500 absolute rounded-2xl overflow-hidden -top-32 sm:-top-44 w-[90%] md:w-[85%] left-1/2 -translate-x-1/2 h-[240px] sm:h-[300px]'>
      <img className='absolute bg-cover h-full w-full rounded-2xl' src={CardBgImg} alt='Card Background' />
      <div className='relative top-0 h-full w-full bg-black bg-opacity-40 rounded-2xl'>{children}</div>
    </div>
  )
}

export default Card
