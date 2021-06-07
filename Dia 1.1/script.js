let count = 0;
function cont() {
  count+=1;
  document.getElementsByClassName("contador")[0].innerHTML = count;
   if(count > 4){
       alert("ATENÇÃO: 4 É O NÚMERO MÁXIMO DE INTEGRANTES DO SQUAD!!")
        document.getElementsByClassName('contador')[0].innerHTML = 4;
   }
 }