function initialAnimation() {
  const content = document.querySelector('.container')
  const { body } = document

  content.style.transform = 'translate(0, 20%)'
  body.style.overflow = 'hidden'

  setTimeout(function () {
    content.style.transform = 'translate(0, 0)'
    content.style.opacity = 1
  }, 2000)

  setTimeout(function () {
    body.style.overflow = 'auto'
  }, 4000)
}

function changeBackground() {
  const backgrounds = document.querySelectorAll('.bg-image')
  let currentIndex = 0

  backgrounds[currentIndex].style.opacity = 1
  setInterval(function () {
    const randomIndex = Math.round(Math.random() * (backgrounds.length - 1))
    const nextIndex =
      currentIndex === randomIndex
        ? randomIndex + 1 > backgrounds.length
          ? 0
          : randomIndex + 1
        : randomIndex

    backgrounds[currentIndex].style.opacity = 0
    backgrounds[nextIndex].style.opacity = 1

    currentIndex = nextIndex
  }, 6000)
}

function resizeBackground() {
  const backgrounds = document.querySelectorAll('.bg-image')
  const windowWidth = document.body.clientWidth
  const windowHeight = document.body.clientHeight

  console.log(windowWidth, windowHeight)

  for (let i = 0; i < backgrounds.length; i++) {
    backgrounds[i].style.width = `${windowWidth}px`
    backgrounds[i].style.height = `${windowHeight}px`
  }
}

window.onload = () => {
  initialAnimation()
  changeBackground()
  resizeBackground()
}

window.onresize = resizeBackground
