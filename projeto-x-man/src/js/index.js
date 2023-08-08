const imagensPersonagem = [...document.querySelectorAll('.personagem')]
const imagensPersonagemGrande = document.querySelector('#personagem-grande')
const nomePersonagem = document.querySelector('#nome-personagem')
const descricaoPersonagem = document.querySelector('#descricao-personagem')

imagensPersonagem.forEach((elemento)=>{
    elemento.addEventListener('click',(evento)=>{
        
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: "smooth"})
        }

        imagensPersonagem.forEach(elemento=>{
            elemento.classList.remove('selecionado')
        })
        elemento.classList.add('selecionado')
        imagensPersonagemGrande.setAttribute('src',`src/imagens/card-${elemento.id}.png`)
        nomePersonagem.innerText = elemento.getAttribute('data-name')
        descricaoPersonagem.innerText = elemento.getAttribute('data-description')

    })
})