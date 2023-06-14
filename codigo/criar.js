let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')

let idade = document.querySelector('#idade')
let labelIdade = document.querySelector('#labelIdade')

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')

let confirmsenha = document.querySelector('#confirmsenha')
let labelconfirmSenha= document.querySelector('#labelconfirmSenha')


nome.addEventListener('keyup',()=>{
    if(nome.value.length <= 2){
     labelNome.setAttribute('style','color: red')
     labelNome.innerHTML = 'Minimo 3 caracteres'
     nome.setAttribute('style', 'color: red')
    }else {
        labelNome.setAttribute('style','color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'color: green')
    }
})

usuario.addEventListener('keyup',()=>{
    if(usuario.value.length <= 1){
     labelUsuario.setAttribute('style','color: red')
     labelUsuario.innerHTML = 'Minimo 2 caracteres'
     usuario.setAttribute('style', 'color: red')
    }else {
        labelUsuario.setAttribute('style','color: green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'color: green')
    }
})

function cadastrar(){
    alert("batata");
}