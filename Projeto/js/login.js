let email = document.getElementById("email");
let senha = document.getElementById("senha");
let form = document.querySelector("form");
let mensagem = document.getElementById("mensagem");
let msgEmail = document.getElementById("msgEmail");
let msgSenha = document.getElementById("msgSenha");


form.addEventListener("submit" , (e) =>{

  e.preventDefault();

})

email.addEventListener("keyup", () =>{
  if(validadorDeEmail(email.value) == false){
    msgEmail.textContent = "Insira o seu email de Cadastro "
  }else{
    msgEmail.textContent = ""
  }
})

senha.addEventListener("keyup", () =>{
  if(validadorDeSenha(senha.value) == false){
    msgSenha.textContent = "Insira a sua senha de Cadastro "
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

function login(){
  if(validadorDeEmail(email.value) === true && validadorDeSenha(senha.value) === true){

    alert("Seja bem-vindo ao BelaSoft!");
    window.location.href = "../html/Pagina.html";

  }else {
    mensagem.textContent = "Preencha os campos com um email ou senha válidos"
   
  }
  
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}



