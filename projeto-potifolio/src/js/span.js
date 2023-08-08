var data = new Date()
var hora = data.getHours()
const texto = document.getElementById('texto-educado')

if(hora >= 0 && hora < 6){
    texto.innerHTML = 'Boa madrugada'
}
else if(hora >= 6 && hora < 12){
    texto.innerHTML = 'Bom dia'
}
else if(hora >= 12 && hora < 18){
    texto.innerHTML = 'Boa tarde'
}
else {
    texto.innerHTML = 'Boa noite'
}

