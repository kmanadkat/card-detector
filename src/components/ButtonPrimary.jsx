import React from 'react'

function ButtonPrimary({ text, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className='w-full bg-[#2165D2] btn-shadow active:bg-[#1E5BBE] active:scale-[.98] mt-4 py-3 rounded-[4px] text-center text-white text-lg transition duration-150'>
      {text}
    </button>
  )
}

export default ButtonPrimary
