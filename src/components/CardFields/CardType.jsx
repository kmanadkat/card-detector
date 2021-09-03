import React from 'react'

import VISA from '../../assets/VISA.svg'
import MASTERCARD from '../../assets/MASTERCARD.svg'
import AMEX from '../../assets/AMEX.svg'
import MAESTRO from '../../assets/MAESTRO.svg'
import RUPAY from '../../assets/RUPAY.svg'

function CardType({ cardType }) {
  const cardTypes = { VISA, MASTERCARD, AMEX, MAESTRO, RUPAY }

  return (
    <img
      className='h-10 sm:h-14 w-auto'
      src={cardType === '' ? cardTypes['VISA'] : cardTypes[cardType]}
      alt='Card Type'
    />
  )
}

export default CardType
