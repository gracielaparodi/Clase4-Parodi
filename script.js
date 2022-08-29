/*
 menos que 18,5 Bajo de peso
 entre 18,5 y 24,9 Normal
 entre 25 y 29,9 Sobrepeso
 entre 30 y 34,9 Obesidad grado 1
 entre 35 y 39,9 Obesidad grado 2
 mas de 40 Obesidad grado 3  
*/


var imc
var peso
var altura

alert("¿Queres saber tu masa corporal?");

peso = prompt("¿Cual es tu peso?"), ("");
peso = parseInt(peso);
altura = prompt("¿Cual es tu altura?", (""));

function calcularImc() {
    return Imc
}

var mult = (altura * altura);
imc = peso / mult;

alert("Tu indice de masa corporal es: " + imc);

var valor
valor = imc;

if (valor < 18.5) { alert("BAJO DE PESO"); }
else if (valor <= 18.50 || valor <= 24.99) { alert("NORMAL") }
else if (valor <= 25.00 || valor <= 29.99) { alert("SOBREPESO"); }
else if (valor <= 30.00 || valor <= 34.99) { alert("OBESIDAD GRADO I"); }
else if (valor <= 35.00 || valor <= 39.99) { alert("OBESIDAD GRADO II"); }
else if (valor < 40) { alert("OBESIDAD GRADO III"); }
else { alert("ERROR"); }