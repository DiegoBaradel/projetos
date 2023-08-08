const icones = [...document.querySelectorAll('.icone')]
const imagemMenu = document.querySelector('#imagem-menu')
const imagemDeFundo = document.querySelector('#imagem-de-fundo')
const tituloDaImagem = document.querySelector('#titulo-da-imagem')
const descricao = document.querySelector('#descricao')

const removerClasseAtivo=()=>{
    icones.forEach(removerClassAtivo=>{
        removerClassAtivo.classList.remove('ativo')
    })
}

const mostrarInformacoes=(infoConstrucao)=>{
    infoConstrucao.classList.add('ativo')
        tituloDaImagem.innerHTML=infoConstrucao.getAttribute('alt')
        descricao.innerHTML=infoConstrucao.getAttribute('data-description')
        imagemDeFundo.setAttribute('src',`./src/imagens/foto-${infoConstrucao.getAttribute('data-name')}`)
}

icones.forEach((maravilha)=>{
    maravilha.addEventListener('click',(evt)=>{
        clearInterval(intervalo)
        intervalo = setInterval(IconeIntervalo,10000)
        removerClasseAtivo()
        mostrarInformacoes(evt.target)
    })
})

imagemMenu.addEventListener('click',(evt)=>{
    evt.target.parentNode.classList.toggle('menu-ativo')
})

let IconeIntervalo=()=>{
    const iconeAtivado = document.querySelector('.ativo')
    removerClasseAtivo()
    if(iconeAtivado.parentNode.nextElementSibling){
        mostrarInformacoes(iconeAtivado.parentNode.nextElementSibling.firstChild)
    }
    else{
        mostrarInformacoes(iconeAtivado.parentNode.parentNode.firstElementChild.firstChild)
    }
}

let intervalo = setInterval(IconeIntervalo,10000)