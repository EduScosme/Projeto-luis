let email = document.getElementById("email");
let senha = document.getElementById("senha");

let mensagem = document.getElementById("mensagem");
let msgEmail = document.getElementById("msgEmail");
let msgSenha = document.getElementById("msgSenha");

email.addEventListener("keyup", () =>{
    if(validadorDeEmail(email.value) == false){
      msgEmail.textContent = "Seu email deve ser Ex: nome@dominio.com "
    }else{
      msgEmail.textContent = ""
    }
  })
  
  senha.addEventListener("keyup", () =>{
    if(validadorDeSenha(senha.value) == false){
      msgSenha.textContent = "A senha deve ter no minimo 6 caracteres, sendo no mínimo 1 caractere especial e 1 número "
    }else{
      msgSenha.textContent = ""
    }
  })
  
  
  
  function validadorDeEmail(email){
    let validador_E = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return validador_E.test(email);
  }
  
  function validadorDeSenha(senha){
    let validador_S =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return validador_S.test(senha);
  }
  
  function cadastrar(){
    if(validadorDeEmail(email.value) === true && validadorDeSenha(senha.value) === true){

      alert("O seu Cadastro foi um sucesso!!")
      window.location.href = "../html/Pagina.html";
  
    }else {
      mensagem.textContent = "Preencha os campos com um email ou senha válidos"
     
    }
    
  }
  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }