export const parseStringList = (stringList: string | null): string[] | null => {
  if (!stringList) {
    return null
  }
  return stringList.split(/,[ ]*/)
}

export const parseNumberList = (numberList: string | null): number[] | null => {
  if (!numberList) {
    return null
  }
  return numberList.split(/,[ ]*/).map((value) => {
    return parseInt(value, 10)
  })
}

export const parseNumberWithLetterScale = (numberString: string | null): number | null => {
  if (!numberString) {
    return null
  }

  const matches = numberString.match(/([0-9.]+)([a-zA-Z]?)/)
  if (!matches || matches.length < 1) {
    return null
  }

  let result = parseFloat(matches[1])

  if (matches.length >= 2) {
    let power = 0
    switch (matches[2].toUpperCase()) {
      case 'K':
        power = 3
        break
      case 'M':
        power = 6
        break
      case 'B':
        power = 9
        break
      default:
        return null
    }
    result *= Math.pow(10, power)
  }

  return result
}