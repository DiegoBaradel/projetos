/* 

objetivo 1 - quando o usúario clicar na botão de trailer, devemos abrir a modal com o video de trailer

    - passo 1 - dar um jeirto de pegar o elemento que representa o botão na tela usando o js.
    - passo 2 - dar um jeito de identificar quando o usúario clicar no botão
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela

objetivo 2 - quando o usúario clicar no X deve fechar a modal

    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no X
    - passo 3 - fechar a modal

objetivo 3 - quando o usúario clicar no botão de veja o trailer, devemos abrir a modal com o video do treiler

*/

console.log('mostrar o document', document);


const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    
    alternarModal();
    video.setAttribute("src", linkDoVideo);

});

botaoFecharModal.addEventListener("click", () => {

    alternarModal();
    video.setAttribute("src", "");

});
