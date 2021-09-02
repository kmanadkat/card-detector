import React from 'react'

function CardHolder({ stateValue, handleInput }) {
  return (
    <div className='input-field flex flex-col space-y-2 mb-6'>
      <label htmlFor='cardHolder' className='text-[14px] text-gray-700'>
        Card Holder
      </label>
      <input
        type='text'
        id='cardHolder'
        className='border-2 border-[#CED6E0] rounded-[4px] py-[6px] px-2 text-lg font-card-main focus:border-blue-400 focus:outline-none transition duration-500 tracking-wider'
        value={stateValue}
        onChange={handleInput}
      />
    </div>
  )
}

export default CardHolder
