import React from 'react'
import { getCardType } from '../utils/cardTypes'
import { getSpacedString } from '../utils/parseCardData'
import ButtonPrimary from './ButtonPrimary'
import Card from './Card'
import CardBack from './CardFields/CardBack'
import CardFront from './CardFields/CardFront'
import CardHolder from './InputFields/CardHolder'
import CardNumber from './InputFields/CardNumber'
import CVV from './InputFields/CVV'
import ExpirationDate from './InputFields/ExpirationDate'

function CardDetector() {
  const [cardFields, setCardFields] = React.useState({
    cardNumber: { trimmed: '', spaced: '' },
    cardHolder: '',
    expirationDate: { month: '', year: '' },
    cvv: '',
    cardType: '',
  })

  const [isCVVActive, setIsCVVActive] = React.useState(false)

  const handleCardNumber = (eve) => {
    const value = eve.target.value
    const trimmed = value.replaceAll(' ', '')

    if (new RegExp(/^\d{0,16}$/).test(trimmed)) {
      const cardType = getCardType(trimmed)
      const spaced = getSpacedString(trimmed)
      setCardFields((prevData) => ({
        ...prevData,
        cardNumber: { trimmed, spaced },
        cardType,
      }))
    }
  }

  const handleCardHolder = (eve) => {
    const value = eve.target.value
    setCardFields((prevData) => ({
      ...prevData,
      cardHolder: value.toUpperCase(),
    }))
  }

  const handleCVV = (eve) => {
    const value = eve.target.value.trim()
    if (new RegExp(/^\d{0,3}$/).test(value)) {
      setCardFields((prevData) => ({
        ...prevData,
        cvv: value.trim(),
      }))
    }
  }

  const handleReset = () => {
    setCardFields((_) => ({
      cardNumber: { trimmed: '', spaced: '' },
      cardHolder: '',
      expirationDate: { month: '', year: '' },
      cvv: '',
      cardType: '',
    }))
  }

  const handleMonthYear = (eve) => {
    const value = eve.target.value
    const valueType = eve.target.name
    setCardFields((prevData) => ({
      ...prevData,
      expirationDate: { ...prevData.expirationDate, [valueType]: value },
    }))
  }

  return (
    <div className='form-container px-8 lg:px-12 pb-12 pt-40 bg-white rounded-md form-container-shadow w-full max-w-[600px] min-w-[360px] md:w-1/2 md:min-w-[500px] relative'>
      <Card>
        {!isCVVActive && <CardFront stateValue={cardFields} />}
        {isCVVActive && <CardBack stateValue={cardFields} />}
      </Card>

      <CardNumber stateValue={cardFields.cardNumber} handleInput={handleCardNumber} />
      <CardHolder stateValue={cardFields.cardHolder} handleInput={handleCardHolder} />

      <div className='input-field mb-6 flex lg:flex-row lg:items-start lg:justify-between flex-col'>
        <ExpirationDate stateValue={cardFields.expirationDate} handleInput={handleMonthYear} />
        <CVV stateValue={cardFields.cvv} handleInput={handleCVV} handleFocus={setIsCVVActive} />
      </div>

      <ButtonPrimary text='Reset' handleClick={handleReset} />
    </div>
  )
}

export default CardDetector
