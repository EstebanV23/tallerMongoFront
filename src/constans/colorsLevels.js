const colorsLevels = {
  1: 'red-400',
  2: 'purple-700',
  3: 'yellow-500',
  4: 'green-600',
  default: 'gray-400'
}

function getColor (nivel) {
  return colorsLevels[nivel] || colorsLevels.default
}

export default getColor
