const body = document.querySelector('body')
const title = document.querySelector('h1')
let flash = false

function toggleTheme() {
  if (flash) {
    console.log('FLASHBANG OUT')
    body.style.backgroundColor = 'white'
    title.style.color = '#222'
    title.textContent = 'FLASHBANG OUT!!!'
  } else {
    body.style.backgroundColor = '#222'
    title.style.color = 'white'
    title.textContent = 'Wait for it...'
  }
  flash = !flash
}

function getRandomTime(min, max) {
  return Math.random() * (max - min) + min
}

;(function loop() {
  var randTime = getRandomTime(2, 5) * 1000
  setTimeout(function () {
    toggleTheme()
    loop()
  }, randTime)
})()
