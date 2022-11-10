const button = document.getElementById('button')
const number = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
]

function getRandomNumber() {
  return Math.floor(Math.random() * number.length)
}

function generateNumber() {
  let numberColor = '#'

  for (let i = 0; i < 6; i += 1) {
    numberColor += number[getRandomNumber()]
  }
  return numberColor
}

button.addEventListener('click', () => {
  const numberColor = generateNumber()
  document.body.style.backgroundColor = numberColor
})
