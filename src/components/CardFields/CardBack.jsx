import React from 'react'
import CardType from './CardType'

function CardBack({ stateValue }) {
  const { cvv, cardType } = stateValue
  return (
    <div className='card-front-content flex flex-col h-full justify-around'>
      {/* Top Row */}
      <div className='w-full bg-black h-14 opacity-80'></div>

      {/* Middle Row */}
      <div className='w-full px-8 h-14 -mt-4 mb-3'>
        <p className='text-white text-sm text-right font-card-secondary mx-2 mb-1'>CVV</p>
        <p className='text-black font-card-main text-right bg-white py-2 px-3 sm:p-3 rounded-sm text-lg'>
          {cvv === '' ? <span>&nbsp;</span> : cvv}
        </p>
      </div>

      {/* Bottom Row */}
      <div className='flex justify-end items-start px-8'>
        <CardType cardType={cardType} />
      </div>
    </div>
  )
}

export default CardBack
