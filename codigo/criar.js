
function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        alert('Sucesso');
        location.href = "index.html";
    }else {
        alert('Usuário ou senha errados! Tente novamente');
        location.href = "login.html";
    }
}


function cadastrar(){
    alert('Botao clicado')
}