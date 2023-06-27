let userLogado = localStorage.getItem('userLogado')

let Logado = documment.querySelector('#Logado')
logado.innerHTML = 'Olá' + userLogado.nome
 
if(localStorage.getItem('token') == null){
  alert('Você precisa estar logado')
}

function sair(){
  localStorage.removeItem('token')
  window.location.href = 'https://ti-1-pmg-cc-m-20231-tiaw-g09-seguranca-no-transito.kaikyfranca.repl.co/login.html'
}