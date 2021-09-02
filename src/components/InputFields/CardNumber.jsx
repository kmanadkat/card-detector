import React from 'react'

function CardNumber({ stateValue, handleInput }) {
  return (
    <div className='input-field flex flex-col space-y-2 mb-6'>
      <label htmlFor='cardNumber' className='text-[14px] text-gray-700'>
        Card Number
      </label>
      <input
        type='text'
        id='cardNumber'
        className='border-2 border-[#CED6E0] rounded-[4px] py-[6px] px-2 text-lg font-card-main focus:border-blue-400 focus:outline-none transition duration-500'
        value={stateValue.spaced}
        onChange={handleInput}
      />
    </div>
  )
}

export default CardNumber
