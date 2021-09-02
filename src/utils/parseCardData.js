const getSpacedString = (trimmedString, continuedLength = 4) => {
  let output = ''
  let index = 0
  while (index < trimmedString.length) {
    let count = 0
    while (index < trimmedString.length && count < continuedLength) {
      output += trimmedString[index]
      count++
      index++
    }
    output += ' '
  }

  return output.trim()
}

const formatCardNumber = (spacedString) => {
  const obscured = '#### #### #### ####'
  let output = spacedString + obscured.substr(spacedString.length)
  return output
}

export { getSpacedString, formatCardNumber }
