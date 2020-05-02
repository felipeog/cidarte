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
  const backgrounds = [
    'img/planos-de-fundo/fundo1.jpg',
    'img/planos-de-fundo/fundo2.jpg',
    'img/planos-de-fundo/fundo3.jpg',
    'img/planos-de-fundo/fundo4.jpg',
    'img/planos-de-fundo/fundo5.jpg',
    'img/planos-de-fundo/fundo6.jpg',
  ]
  let currentIndex = 0

  setInterval(function () {
    const randomIndex = Math.round(Math.random() * (backgrounds.length - 1))
    const nextIndex =
      currentIndex === randomIndex
        ? randomIndex + 1 > backgrounds.length
          ? 0
          : randomIndex + 1
        : randomIndex

    new Image().src = backgrounds[nextIndex]
    document.body.style.backgroundImage = `url(${backgrounds[currentIndex]})`

    currentIndex = nextIndex
  }, 6000)
}

initialAnimation()
changeBackground()
