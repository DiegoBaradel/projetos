const listaBotoes = document.querySelectorAll('.botao')
const listaPersonagens= document.querySelectorAll('.personagem')

listaBotoes.forEach((botao,index)=>{
    botao.addEventListener('click',()=>{

        desselecionarBotao();
        desselecionarPersonagem();
        botao.classList.add('selecionado');    
        listaPersonagens[index].classList.add('selecionado');
        
    });
});

function desselecionarPersonagem(){
    const personagemSelecionado =document.querySelector('.personagem.selecionado');
        personagemSelecionado.classList.remove('selecionado');
}
function desselecionarBotao(){
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}