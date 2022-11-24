alert("REGRAS DO JOGO: ESCREVER SEMPREM EM CAPSLOCK ----- OS NOMES DOS JOGADORES PRECISAM TER A MESMA QUANTIDADE DE LETRAS!!!")

const corpo = document.querySelector('body') 
const meio = document.querySelector('.words')

function saveNames(){
    var player1 = document.querySelector('#player1').value;
    var player2 = document.querySelector('#player2').value;
    player1 += ' '
    player2 += ' '

    document.querySelector('.salvar-players').style.display='none'

    console.log(player1)
    console.log(player2)
    document.querySelector('.game').style.display = 'block'

    document.querySelector('.playerNome1').textContent = player1
    document.querySelector('.playerNome2').textContent = player2
}

let quantidade = 16
let palavras = ['LOAD' , 'PASSWORD' , 'GAME' , 'TEACHER' , 'COMPUTER' , 'CODE' , 'PROGRAMMER' , 'SHARE' , 'SOFTWARE' , 'TECHNOLOGY' , 'SETTINGS' , 'UPDATE' , 'SMART' , 'TEXT' , 'LIBRARY' , 'IMPORT']


function inicioLetras(){
    let random = Math.floor(Math.random()*quantidade)
    let palavraEscolhida = document.querySelector('.palavraEscolhida')
    palavraEscolhida.textContent = palavras[random]
    palavras.splice(random , 1);
    quantidade = quantidade - 1
    console.log(palavras)
    if(palavras.length == 0){
        alert('O JOGO ACABOU')
        document.querySelector('.fim').style.display= 'none'
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-primary')
    }
}



function corrigir(){
    document.querySelector('.player-time').textContent = ''
    let resultado = document.querySelector('.palavraEscolhida').textContent;
    let resposta = document.querySelector('#tela').value
    let player1 = document.querySelector('.playerNome1')
    let player2 = document.querySelector('.playerNome2')

    if(resultado == "LOAD" && resposta == "CARREGAR"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else if(resultado == "GAME" && resposta == "JOGO"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else if(resultado == "TEACHER" && resposta == "PROFESSOR"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else if(resultado == "COMPUTER" && resposta == "COMPUTADOR"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else if(resultado == "CODE" && resposta == "CODIGO"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else if(resultado == "PROGRAMMER" && resposta == "PROGRAMADOR"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else if(resultado == "SHARE" && resposta == "COMPARTILHAR"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else if(resultado == "SOFTWARE" && resposta == "PROGRAMA"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else if(resultado == "TECHNOLOGY" && resposta == "TECNOLOGIA"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else if(resultado == "SETTINGS" && resposta == "CONFIGURAÇÕES"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else if(resultado == "UPDATE" && resposta == "ATUALIZAÇÃO"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else if(resultado == "SMART" && resposta == "INTELIGENTE"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else if(resultado == "TEXT" && resposta == "TEXTO"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else if(resultado == "LIBRARY" && resposta == "BIBLIOTECA"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else if(resultado == "IMPORT" && resposta == "IMPORTAR"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else if(resultado == "PASSWORD" && resposta == "SENHA"){
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-success')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-success')
        alert("ACERTOUUU")
        setTimeout(function(){
            corpo.removeAttribute('class' , 'bg-success')
            corpo.setAttribute('class' , 'bg-warning')
            meio.removeAttribute('class' , 'bg-success')
            meio.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'O'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'O'
        }
        document.querySelector('.palavraEscolhida').textContent = ""
    }else {
        meio.removeAttribute('class' , 'bg-warning')
        meio.setAttribute('class' , 'bg-danger')
        corpo.removeAttribute('class' , 'bg-warning')
        corpo.setAttribute('class' , 'bg-danger')
        alert("ERROUUU")
        document.querySelector('#tela').value = ''
        if(player1.textContent.length <= player2.textContent.length){
            player1.textContent += 'X'
            console.log(player1.textContent.length)
        }else {
            player2.textContent += 'X'
        }

        setTimeout(function(){
            meio.removeAttribute('class' , 'bg-danger')
            meio.setAttribute('class' , 'bg-warning')
            corpo.removeAttribute('class' , 'bg-danger')
            corpo.setAttribute('class' , 'bg-warning')
        } , 3000)
        document.querySelector('.palavraEscolhida').textContent = ""
    }
}

