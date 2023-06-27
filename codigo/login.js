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
       window.location.href = 'https://ti-1-pmg-cc-m-20231-tiaw-g09-seguranca-no-transito.kaikyfranca.repl.co/telalogada.html'

      let token = Math.random().toString(16).substr(2)
      localStorage.setItem('token', token)

      localStorage.setItem('userLogado', JSON.stringfy(userValid))
    }else {
        alert('Tente novamente')
    }
}