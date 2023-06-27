function entrar(){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')
    
    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('msgError')
    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listarUser.foreach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    if(usuario.value == userValid.user && senha.value == userValid.senha){
       window.location.href = 'http://127.0.0.1:5500/index.html'
    }else {
        alert('Tente novamente')
    }
}