/* ===============================
   INÍCIO - Carregamento da página
=============================== */

function carrega() {
  document.body.style.display = 'none'
  document.body.style.backgroundImage = 'none'
  document.body.style.transform = 'translate(0, 20%)'
  document.body.style.overflow = 'hidden'
  document.body.style.opacity = 0

  setTimeout(function () {
    document.body.style.display = 'block'
    document.body.style.backgroundImage = 'url(img/planos-de-fundo/fundo1.jpg)'
  }, 2500)

  setTimeout(function () {
    document.body.style.transform = 'translate(0, 0)'
    document.body.style.opacity = 1
  }, 5000)

  setTimeout(function () {
    document.body.style.overflow = 'auto'
  }, 7500)
}

/* ===============================
   FIM - Carregamento da página
=============================== */

/* ===================================
   INÍCIO - Mudança da imagem de fundo
=================================== */

/*endereços das imagens*/
var background_url = [
  'img/planos-de-fundo/fundo2.jpg',
  'img/planos-de-fundo/fundo3.jpg',
  'img/planos-de-fundo/fundo4.jpg',
  'img/planos-de-fundo/fundo6.jpg',
  'img/planos-de-fundo/fundo1.jpg',
]

/*pré-carrega imagens*/
for (var i = 0; i < background_url.length; i++) {
  new Image().src = background_url[i]
}

/*mudança do background*/
function mudaBackground(indice) {
  setTimeout(function () {
    document.body.style.backgroundImage = 'url(' + background_url[indice] + ')'
    if (indice + 1 >= background_url.length) {
      mudaBackground(0)
    } else {
      mudaBackground(indice + 1)
    }
  }, 10000)
}

/* ===================================
   FIM - Mudança da imagem de fundo
=================================== */

/* ==================
   Chamada de funções
================== */

carrega()

setTimeout(function () {
  mudaBackground(0)
}, 7500)
