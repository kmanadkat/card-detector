const getMonths = () => {
  const output = []
  for (let i = 1; i <= 12; i++) {
    output.push(i.toString().padStart(2, '0'))
  }
  return output
}

const getYears = (period = 10) => {
  const currentYear = new Date().getFullYear()
  let output = []
  for (let i = currentYear; i < currentYear + period; i++) {
    output.push(i.toString())
  }
  return output
}

export { getMonths, getYears }
