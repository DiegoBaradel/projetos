const botaoTema = document.querySelector('#btn-tema')
const botaoSlide = [...document.querySelectorAll('.botao-slide')]

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

        botaoSlide.forEach(removerClass=>{
            removerClass.classList.remove('botao-ativo')
        })
        evt.target.classList.add('botao-ativo')
        
        const largura = document.querySelector('#slide-projetos-eventos').clientWidth

        document.querySelector('#imagem-slide').style.left = `-${largura*index}px`
    })
})