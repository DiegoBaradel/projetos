const botaoVerificar = document.querySelector('#verificar-numero')
const botaoIniciar = document.querySelector('#iniciar')
const botaoRegras = document.querySelector('#botao-seta')
const botaoSomar = [...document.querySelectorAll('.somar')]
const botaoSubtrair = [...document.querySelectorAll('.subtrair')]
const vidasRestantes = document.querySelector('#tentativas-restantes')

let fim = true
let vidas = 8
let numeroSecretoAleatorio = []
let numeroSecretoAleatorioEscrito=''

const fimDeJogo=(titulo,numero)=>{
    document.querySelector('#titulo-saida-dado').innerHTML=titulo
    document.querySelector('#numero-aleatorio').innerHTML=numero
    botaoIniciar.classList.remove('display-none')
}

const numeroRepetido=(numeros)=>{
    let repete=false
    numeros.forEach((elemento,index)=>{
         numeros.splice(index,1)
        if(numeros.indexOf(elemento)>-1){
            repete=true
        }
        numeros.splice(index,0,elemento)
    })
    return repete
}

const reset=()=>{
    fim=false
    vidas = 8
    numeroSecretoAleatorio = []
    numeroSecretoAleatorioEscrito=''
    document.querySelector('#tabela').innerHTML=''

    fimDeJogo('Adivinhe o Número','????')
}

const mostrarVidas=(quantidade)=>{
    vidasRestantes.innerHTML=''
    while(quantidade>0){
        const img = document.createElement('img')
        img.setAttribute('src','./src/imagens/coracao.png')
        img.setAttribute('alt','imagem de vida')
        img.setAttribute('class','vida')
        vidasRestantes.appendChild(img)
        quantidade--
    }
}
const escreverTr=()=>{
    const tr = document.createElement('tr')
    tr.setAttribute('class','alvo')
    document.querySelector('#tabela').appendChild(tr)
}
const escreverTd=(cor)=>{
    const ultimoTr = [...document.querySelectorAll('.alvo')]
    const td = document.createElement('td')
    td.setAttribute('class', cor)
    ultimoTr[ultimoTr.length-1].appendChild(td)
}

botaoSomar.forEach(botao=>{
    botao.addEventListener('click',(evt)=>{
        if(fim){
            return
        }
        let valor = evt.target.parentNode.nextElementSibling.value
        if(valor<9){
            valor++
        }
        else if(valor==9){
            valor=0
        }
        evt.target.parentNode.nextElementSibling.value = valor
    })
})

botaoSubtrair.forEach(botao=>{
    botao.addEventListener('click',(evt)=>{
        if(fim){
            return
        }
        let valor = evt.target.parentNode.parentNode.firstElementChild.nextElementSibling.value
        if(valor>0){
            valor--
        }
        else if(valor==0){
            valor=9
        }
        evt.target.parentNode.parentNode.firstElementChild.nextElementSibling.value = valor
    })
})

botaoIniciar.addEventListener('click',(evt)=>{
    reset()
    for(let index = 0; index < 4; ){
        let aleatorio = Math.floor(Math.random() * 9)
        if (numeroSecretoAleatorio.indexOf(aleatorio) == -1){
            numeroSecretoAleatorio.push(aleatorio)
            numeroSecretoAleatorioEscrito=numeroSecretoAleatorioEscrito +' '+aleatorio
            index++  
        }
    }
    mostrarVidas(vidas)
    botaoIniciar.classList.add('display-none')
    document.querySelector('#div-saida-dado').classList.remove('display-none')
})

botaoVerificar.addEventListener('click', (evt)=>{
    if(fim){
        return
    }
    const numeroSecretoUsuario = [...document.querySelectorAll('.numero-secreto')]
    const senhaUsuario = numeroSecretoUsuario.map(numero=>{
        return Number(numero.value)
    })
    
    if(numeroRepetido(senhaUsuario)){
        alert('Os Números não podem repetir')
        return
    }
    escreverTr()
    
    senhaUsuario.forEach((numeroUsuario,index)=>{
        if(numeroUsuario == numeroSecretoAleatorio[index]){
            escreverTd('cor1')
        }
        else if(numeroSecretoAleatorio.indexOf(numeroUsuario) != -1){
            escreverTd('cor2')
        }
        else{
            escreverTd('cor3')
        }

    })
    vidas--
    if(JSON.stringify(senhaUsuario) === JSON.stringify(numeroSecretoAleatorio) && vidas > 0){
        fimDeJogo('Parabens voce ganhou',numeroSecretoAleatorioEscrito)
        fim=true
    }
    else if(vidas <= 0){
        fimDeJogo('Você perdeu!!!',numeroSecretoAleatorioEscrito)
        fim=true
    }
    numeroSecretoUsuario.forEach(campo=>{
        campo.value='0'
    })
    mostrarVidas(vidas)
})

botaoRegras.addEventListener('click',(evt)=>{
    const regras = document.querySelector('#regras')
    regras.classList.toggle('ativo')
    if(regras.classList.contains('ativo')){
        document.querySelector('#imagem-seta').setAttribute('src','./src/imagens/seta-esquerda.svg')
    }
    else{
        document.querySelector('#imagem-seta').setAttribute('src','./src/imagens/seta-direita.svg')
    }
})
