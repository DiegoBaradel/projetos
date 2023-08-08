const botoesCarrosel = document.querySelectorAll('.botao');

botoesCarrosel.forEach((botao, indece )=> {
    botao.addEventListener('click', () =>{
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        
        botao.classList.add('selecionado');
        
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
       
        const imagens = document.querySelectorAll('.imagem');
        imagens[indece].classList.add('ativa');
    })
    

})




