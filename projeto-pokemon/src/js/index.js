const botaoTrocarTema = document.getElementById('botao-alterar-tema')

botaoTrocarTema.addEventListener('click', () => {
    const body = document.querySelector('body')
    body.classList.toggle('modo-escuro')
    const trocarImagem = document.querySelector('.imagem-botao')
    const modoEscuroAtivado = body.classList.contains('modo-escuro')

    if(modoEscuroAtivado){
        trocarImagem.setAttribute('src','./src/imagens/moon.png')
    }
    else{
        trocarImagem.setAttribute('src','./src/imagens/sun.png')
    }
})