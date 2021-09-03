import React from 'react'
import CardChip from '../../assets/chip.png'
import { formatCardNumber } from '../../utils/parseCardData'
import CardType from './CardType'

function CardFront({ stateValue }) {
  const { cardNumber, cardHolder, expirationDate, cardType } = stateValue
  const cardNumberFormatted = formatCardNumber(cardNumber.spaced)
  return (
    <div className='card-front-content flex flex-col justify-between h-full'>
      {/* Top Row */}
      <div className='relative flex justify-between items-start pt-6 px-6'>
        <img className='h-10 w-auto' src={CardChip} alt='Card Chip' />
        <CardType cardType={cardType} />
      </div>

      {/* Middle Row */}
      <p className='font-card-main text-2xl sm:text-[26px] lg:text-[34px] tracking-widest text-center text-white font-normal px-6'>
        {cardNumberFormatted}
      </p>

      {/* Last Row */}
      <div className='relative flex justify-between items-start pb-6 px-6'>
        <div className='card-holder-wrapper'>
          <p className='font-card-secondary text-xs sm:text-sm text-gray-400 my-1 text-left'>Card Holder</p>
          <p className='font-card-main text-lg sm:text-xl tracking-widest text-white font-normal text-left'>
            {cardHolder.trim() !== '' ? cardHolder : 'FULL NAME'}
          </p>
        </div>
        <div className='card-expiration-wrapper'>
          <p className='font-card-secondary text-xs sm:text-sm text-gray-400 my-1 text-right'>Expires</p>
          <p className='font-card-main text-lg sm:text-xl tracking-widest text-white font-normal text-right'>
            <span>{expirationDate.month.trim() !== '' ? expirationDate.month : 'MM'}</span>
            <span>/</span>
            <span>{expirationDate.year.trim() !== '' ? expirationDate.year.substr(2) : 'YY'}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardFront
