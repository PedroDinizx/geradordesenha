let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector('#valor');

let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghjklmnopqrstuvwyzABCDEFGHIJKLMNOPRSTUVWYZ012345678910#$%&!@";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.Value;

sliderElement.oninput = function(){
sizePassword.innerHTML = this.value;

}

function generatePassword() {
  let pass = "";
  for(let i= 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove("hide")
  password.innerHTML = pass;
}

function copyPassword() {
  alert('senha copiada com sucesso!')
  navigator.clipboard.writeText(novaSenha);
}
