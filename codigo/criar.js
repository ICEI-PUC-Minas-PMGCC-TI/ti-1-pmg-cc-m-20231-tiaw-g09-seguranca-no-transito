//campos de validação

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let idade = document.querySelector('#idade')
let labelIdade = document.querySelector('#labelIdade')
let validIdade = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmsenha = document.querySelector('#confirmSenha')
let labelconfirmSenha= document.querySelector('#labelconfirmSenha')
let validconfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


nome.addEventListener('keyup',()=>{
    if(nome.value.length <= 2){
     labelNome.setAttribute('style','color: red')
     labelNome.innerHTML = 'Minimo 3 caracteres'
     nome.setAttribute('style', 'color: red')
     validNome = false
    }else {
        labelNome.setAttribute('style','color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup',()=>{
    if(usuario.value.length <= 1){
     labelUsuario.setAttribute('style','color: red')
     labelUsuario.innerHTML = 'Minimo 2 caracteres'
     usuario.setAttribute('style', 'color: red')
     validUsuario = false
    }else {
        labelUsuario.setAttribute('style','color: green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'color: green')
        validUsuario = true
    }
})

idade.addEventListener('keyup',()=>{
    if(idade.value<= 17){
     labelIdade.setAttribute('style','color: red')
     labelIdade.innerHTML = 'Minimo 18 anos'
     idade.setAttribute('style', 'color: red')
     validIdade = false
    }else {
        labelIdade.setAttribute('style','color: green')
        labelIdade.innerHTML = 'Idade'
        idade.setAttribute('style', 'color: green')
        validIdade = true
    }
})

senha.addEventListener('keyup',()=>{
    if(senha.value.length<= 10){
     labelSenha.setAttribute('style','color: red')
     labelSenha.innerHTML = 'Minimo 10 caracteres'
     senha.setAttribute('style', 'color: red')
     validSenha = false
    }else {
        labelSenha.setAttribute('style','color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'color: green')
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if(senha.value !== confirmsenha.value){
        labelconfirmSenha.setAttribute('style', 'color: red')
        labelconfirmSenha.innerHTML = 'Confirmar senha'
        confirmSenha.setAttribute('style', 'color:red')
        validconfirmSenha = false
    } else{
        labelconfirmSenha.setAttribute('style', 'color: green')
        labelconfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'color: green')
        validconfirmSenha = true    
    }
})

  //fim dos campos

//validação
function cadastrar(){
    if(validNome && validUsuario && validIdade && validSenha && validconfirmSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                idadeCad: idade.value,
                senhaCad: senha.value
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = 'Cadastrando'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        
    }else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'DEU RUIM'
        msgSuccess.innerHTML = '' 
        msgSuccess.setAttribute('style', 'display: none')

    }
}