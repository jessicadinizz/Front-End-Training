const campoSenha = document.querySelector("#senha1");
const campoConfirmaSenha = document.querySelector("#senha2");

function validarSenha() {
  if (campoSenha.value == "" || campoConfirmaSenha.value == "") {
    alert("Por favor preencha todos os campos!");
  } else if (campoSenha.value == campoConfirmaSenha.value) {
    alert("Senhas iguais");
  } else {
    alert("Senhas diferentes");
  }
}