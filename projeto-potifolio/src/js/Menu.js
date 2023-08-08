const monitor = document.getElementById('icone-menu')
monitor.addEventListener('click',clicar)

const menu = document.getElementById('menu')
menu.addEventListener('click',clicar)

const menuUl = document.getElementById('menu-navegar')
menuUl.addEventListener('mouseleave',clicar)


function clicar(){
    if (menu.style.display == 'block'){
        menu.style.display = 'none'
    }
    else{
        menu.style.display = 'block'
    }
}

function tamanho(){
    if(window.innerWidth >= 960){
        menu.style.display = 'block'
    }
    else{
        menu.style.display = 'none'
    }
}