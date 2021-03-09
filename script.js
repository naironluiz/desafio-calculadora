const opacidadeUm = document.querySelector('.primeiro')
opacidadeUm.addEventListener('click', () => {
    opacidadeUm.style.opacity = '1';
})

const opacidadeDois = document.querySelector('.segundo')
opacidadeDois.addEventListener('click', () => {
    opacidadeDois.style.opacity = '1';
})
const soma = document.querySelector('#soma')
const sub = document.querySelector('#sub')
const multi = document.querySelector('#multiplicacao')
const divisao = document.querySelector('#divisao')



soma.addEventListener('click', () => {
    soma.classList.add('ativo')
    sub.classList.remove('ativo')
    multi.classList.remove('ativo')
    divisao.classList.remove('ativo')
})

sub.addEventListener('click', () => {
    soma.classList.remove('ativo')
    sub.classList.add('ativo')
    multi.classList.remove('ativo')
    divisao.classList.remove('ativo')
})

multi.addEventListener('click', () => {
    soma.classList.remove('ativo')
    sub.classList.remove('ativo')
    multi.classList.add('ativo')
    divisao.classList.remove('ativo')

})

divisao.addEventListener('click', () => {
    soma.classList.remove('ativo')
    sub.classList.remove('ativo')
    multi.classList.remove('ativo')
    divisao.classList.add('ativo')

})

const igual = document.querySelector('.igual')

igual.addEventListener('click', function (i) {
    const primeiro = parseInt(document.querySelector('.primeiro').value)
    const segundo = parseInt(document.querySelector('.segundo').value)
    var resultado = 0
    if (soma.className === 'ativo') {
        resultado = primeiro + segundo
    } else if (sub.className === 'ativo') {
        resultado = primeiro - segundo
    } else if (multi.className === 'ativo') {
        resultado = primeiro * segundo
    } else if (divisao.className === 'ativo') {
        resultado = primeiro / segundo
    }

    const final = document.querySelector('.final')
    final.textContent = resultado
    final.style.opacity = '1'

})