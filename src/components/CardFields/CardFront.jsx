import React from 'react'
import CardChip from '../../assets/chip.png'

import VISA from '../../assets/VISA.svg'
import MASTERCARD from '../../assets/MASTERCARD.svg'
import AMEX from '../../assets/AMEX.svg'
import MAESTRO from '../../assets/MAESTRO.svg'
import RUPAY from '../../assets/RUPAY.svg'
import { formatCardNumber } from '../../utils/parseCardData'

function CardFront({ stateValue }) {
  const { cardNumber, cardHolder, expirationDate, cardType } = stateValue
  const cardNumberFormatted = formatCardNumber(cardNumber.spaced)
  const cardTypes = { VISA, MASTERCARD, AMEX, MAESTRO, RUPAY }

  return (
    <div className='card-front-content flex flex-col justify-between h-full'>
      {/* Top Row */}
      <div className='relative flex justify-between items-start pt-6 px-6'>
        <img className='h-10 w-auto' src={CardChip} alt='Card Chip' />
        <img className='h-14 w-auto' src={cardType === '' ? cardTypes['VISA'] : cardTypes[cardType]} alt='Card Type' />
      </div>

      {/* Middle Row */}
      <p className='font-card-main text-[26px] lg:text-[34px] tracking-widest text-center text-white font-normal px-6'>
        {cardNumberFormatted}
      </p>

      {/* Last Row */}
      <div className='relative flex justify-between items-start pb-6 px-6'>
        <div className='card-holder-wrapper'>
          <p className='font-card-secondary text-sm text-gray-400 my-1 text-left'>Card Holder</p>
          <p className='font-card-main text-xl tracking-widest text-white font-normal text-left'>
            {cardHolder.trim() !== '' ? cardHolder : 'FULL NAME'}
          </p>
        </div>
        <div className='card-expiration-wrapper'>
          <p className='font-card-secondary text-sm text-gray-400 my-1 text-right'>Expires</p>
          <p className='font-card-main text-xl tracking-widest text-white font-normal text-right'>
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
