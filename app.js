const colors = ['red', 'green', 'yellow', 'blue']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
  const randomColor = getRandomNumber()
  console.log(randomColor)

  document.body.style.backgroundColor = colors[randomColor]
  color.textContent = colors[randomColor]
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}
