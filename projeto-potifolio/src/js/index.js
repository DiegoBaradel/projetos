const botaoTema = document.querySelector('#btn-tema')
const botaoSlide = [...document.querySelectorAll('.botao-slide')]

const rotinaResetIntervalo = ()=>{
    clearInterval(intervalo)
    intervalo = setInterval(rotinaIntervalo,5000)
}
const rotinaIntervalo = ()=>{
    const largura = document.querySelector('#slide-projetos-eventos').clientWidth
    let botaoAtivo
    let indexBotaoAtivo

    botaoSlide.forEach((botao, index)=>{
        if(botao.classList.contains('botao-ativo')){
            botaoAtivo = botao
            indexBotaoAtivo = index
        }
    })
    botaoAtivo.classList.remove('botao-ativo')

    if(botaoAtivo.nextElementSibling){
        botaoAtivo.nextElementSibling.classList.add('botao-ativo')
        document.querySelector('#imagem-slide').style.left = `-${largura*indexBotaoAtivo+largura}px`
    }
    else{
        botaoAtivo.parentElement.firstElementChild.classList.add('botao-ativo')
        document.querySelector('#imagem-slide').style.left = '-0px'
    }
}

let intervalo = setInterval(rotinaIntervalo,5000)

botaoTema.addEventListener('click',(evt)=>{
    const corpo = document.querySelector('body')
    corpo.classList.toggle('tema')

    if(corpo.classList.contains('tema')){
        document.querySelector('#botao-tema').setAttribute('src','./src/imagens/tema-claro.svg')
        document.querySelector('#logo-linkedin').setAttribute('src','./src/imagens/linkedin-in.svg')
        document.querySelector('#logo-github').setAttribute('src','./src/imagens/github.svg')
        document.querySelector('#logo-download').setAttribute('src','src/imagens/download.svg')
    }
    else{
        document.querySelector('#botao-tema').setAttribute('src','./src/imagens/tema-escuro.png')
        document.querySelector('#logo-linkedin').setAttribute('src','./src/imagens/linkedin-in.png')
        document.querySelector('#logo-github').setAttribute('src','./src/imagens/github.png')
        document.querySelector('#logo-download').setAttribute('src','src/imagens/download.png')
    }
})

botaoSlide.forEach((botao,index)=>{
    botao.addEventListener('click',(evt)=>{

        rotinaResetIntervalo()

        botaoSlide.forEach(removerClass=>{
            removerClass.classList.remove('botao-ativo')
        })
        evt.target.classList.add('botao-ativo')
        
        const largura = document.querySelector('#slide-projetos-eventos').clientWidth

        document.querySelector('#imagem-slide').style.left = `-${largura*index}px`
    })
})

window.addEventListener('resize',(evento)=>{

    rotinaResetIntervalo()
    
    botaoSlide.forEach(botao=>{
        botao.classList.remove('botao-ativo')
    })
    botaoSlide[0].classList.add('botao-ativo')
    document.querySelector('#imagem-slide').style.left = '-0px'
})

