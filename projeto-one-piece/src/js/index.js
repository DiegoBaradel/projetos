const listaBotoes = document.querySelectorAll('.botao')
const listaPersonagens= document.querySelectorAll('.personagem')

listaBotoes.forEach((botao,index)=>{
    botao.addEventListener('click',()=>{
        const botaoSelecionado = document.querySelector('.botao.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        botao.classList.add('selecionado');

        const personagemSelecionado =document.querySelector('.personagem.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        listaPersonagens[index].classList.add('selecionado');
    })
})