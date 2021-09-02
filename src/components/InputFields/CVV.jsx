import React from 'react'

function CVV({ stateValue, handleInput }) {
  return (
    <div className='cvv-wrapper input-field flex flex-col space-y-2 lg:w-1/3'>
      <label htmlFor='cvv' className='text-[14px] text-gray-700'>
        CVV
      </label>
      <input
        type='text'
        id='cvv'
        className='border-2 border-[#CED6E0] rounded-[4px] py-[6px] px-2 text-lg font-card-main focus:border-blue-400 focus:outline-none transition duration-500 tracking-wider'
        value={stateValue}
        onChange={handleInput}
      />
    </div>
  )
}

export default CVV
