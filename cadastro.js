function voltar(){
    window.location.assign("http://127.0.0.1:5500/sitedosoutros/login1/login1.html")
  }
     function inicio(){
      window.location.assign("http://127.0.0.1:5500/Tela-de-inicio-desktop/Tela-de-%C3%ADnicio-desktop.html")
     }
 
  function cadastro(){
    window.location.assign("http://127.0.0.1:5500/sitedosoutros/cadastro/TeladeCadastro.html")
  }
 
  function main() {
        var email= document.getElementById('Email').value;
        var senha= document.getElementById('Senha').value;
 
        if (email == "gustavo@paciente.com" && senha == "1234"){
          alert('Sucesso');
          window.location.assign("http://127.0.0.1:5500/sitedosoutros/Consulta/consulta.html")
        }
         
         else if (email == "cleber.machado@medico.com" && senha == "12345"){
            alert('Sucesso');
            window.location.assign("http://127.0.0.1:5500/sitedosoutros/Consulta/consulta.html")
          }
 
            else if (email == "josue@admin.com" && senha == "123456"){
              alert('Sucesso');
              window.location.assign("http://127.0.0.1:5500/sitedosoutros/Consulta/consulta.html")
            }  
       
              else{
        alert("Usuário ou senha incorretos");
       }
  }
 
 

//Tela de incio.js
function redirectCadastrese() {
    window.location.assign("http://127.0.0.1:5500/sitedosoutros/cadastro/TeladeCadastro.html")
}


function redirectLogin(){
    window.location.assign("http://127.0.0.1:5500/sitedosoutros/login1/login1.html")
}


function redirectQuemsomos(){
    window.location.assign("https://www.google.com")
}


function redirectAgendar(){
    window.location.assign("http://127.0.0.1:5500/sitedosoutros/Consulta/consulta.html")
}


function redirectAjuda(){
    window.location.assign("https://www.google.com")
}


function redirectOnde(){
    window.location.assign("http://127.0.0.1:5500/sitedosoutros/Localiza%C3%A7ao/Localizacao.html")    
}


function redirectOutros(){
    window.location.assign("https://www.google.com")
}

//ccadastro.js
var botaoMarcado = false;


function marcarBotao() {
  var botao = document.getElementById("botao");
  if (botao.classList.contains("botao-marcado")) {
    botao.classList.remove("botao-marcado");
    botaoMarcado = false;
  } else {
    botao.classList.add("botao-marcado");
    botaoMarcado = true;
  }
}




  function validarForm() {
    if (!botaoMarcado==false) {
      alert("Sucesso");
      window.location.assign("http://127.0.0.1:5500/sitedosoutros/login2/TelaDeLogin2.html")}


    else{
    alert("Preencha os termos de uso")}
  }




function inicio(){
  window.location.assign("http://127.0.0.1:5500/Tela-de-inicio-desktop/Tela-de-%C3%ADnicio-desktop.html")


}



localizaçao.js
function redirectonde(){
    window.location.assign("http://127.0.0.1:5500/Tela-de-inicio-desktop/Tela-de-%C3%ADnicio-desktop.html")
}

//consulta.js
function redirectinicio(){
    window.location.assign("http://127.0.0.1:5500/Tela-de-inicio-desktop/Tela-de-%C3%ADnicio-desktop.html")
}

//login1.js
function redirectAdmin(){
    window.location.assign("http://127.0.0.1:5500/sitedosoutros/login2/TelaDeLogin2.html")


}


function redirectmedic(){
    window.location.assign("http://127.0.0.1:5500/sitedosoutros/login2/TelaDeLogin2.html")
}


function redirectpaci(){
    window.location.assign("http://127.0.0.1:5500/sitedosoutros/login2/TelaDeLogin2.html")
}


function redirectInicio(){
    window.location.assign("http://127.0.0.1:5500/Tela-de-inicio-desktop/Tela-de-%C3%ADnicio-desktop.html")


}
