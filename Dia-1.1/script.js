let cont = 0;
let formCont = document.querySelector(".form-cont");
let formButton = document.querySelector(".form-button");

formButton.addEventListener("click", handleformButton);

function handleformButton() {
  if (cont >= 4) {
    alert("ATENÇÃO: 4 É O NÚMERO MÁXIMO DE INTEGRANTES DO SQUAD!!");
  } else {
    cont += 1;
    formCont.innerHTML = cont;
  }
}
