function somar() {
    let tn1 = document.getElementById("n1");
    let tn2 = document.getElementById("n2");
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let s = n1 + n2;
    document.getElementById("sumRes").value = s;
}

function subtrair() {
    let subtn1 = document.getElementById("subn1");
    let subtn2 = document.getElementById("subn2");
    let sub1 = Number(subtn1.value);
    let sub2 = Number(subtn2.value);
    sub = sub1 - sub2;
    document.getElementById("subRes").value = sub;
}

function multiplicar() {
    let multtn1 = document.getElementById("multn1");
    let multtn2 = document.getElementById("multn2");
    let mult1 = Number(multtn1.value);
    let mult2 = Number(multtn2.value);
    mult = mult1 * mult2;
    document.getElementById("multRes").value = mult;
}

function dividir() {
    let tn1111 = document.getElementById("n7");
    let tn2222 = document.getElementById("n8");
    let n7 = Number(tn1111.value);
    let n8 = Number(tn2222.value);
    let di = n7 / n8;
    if (n8 == 0) {
        alert("Essa divisão não existe");
        di = null;
    }
    document.getElementById("diRes").value = di;
}