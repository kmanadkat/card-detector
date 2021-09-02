import React from 'react'
import { getMonths, getYears } from '../../utils/dateMethods'

function ExpirationDate({ stateValue, handleInput }) {
  const months = getMonths()
  const years = getYears(10)

  return (
    <div className='month-year-wrapper flex flex-col space-y-2 self-stretch lg:mb-0 mb-6'>
      <label htmlFor='monthYear' className='text-[14px] text-gray-700'>
        Expiration Date
      </label>
      <div className='flex items-start space-x-4'>
        <select
          className='border-2 border-[#CED6E0] py-[6px] lg:pl-3 pr-8 px-3 text-lg font-card-main rounded-[4px] h-[44px] focus:border-blue-400 focus:outline-none transition duration-500 w-1/2 lg:w-auto'
          name='month'
          value={stateValue.month}
          onChange={handleInput}>
          <option value='' disabled>
            Month
          </option>
          {months.map((mn) => (
            <option key={mn} value={mn}>
              {mn}
            </option>
          ))}
        </select>

        <select
          className='border-2 border-[#CED6E0] py-[6px] lg:pl-3 pr-8 px-3 text-lg font-card-main rounded-[4px] h-[44px] focus:border-blue-400 focus:outline-none transition duration-500 w-1/2 lg:w-auto'
          name='year'
          value={stateValue.year}
          onChange={handleInput}>
          <option value='' disabled>
            Year
          </option>
          {years.map((yr) => (
            <option key={yr} value={yr}>
              {yr}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ExpirationDate
