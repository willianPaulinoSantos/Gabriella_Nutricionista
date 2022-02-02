var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoValido = true;
var alturaValida = true;


if (peso <= 0 || peso >= 595){

	console.log("Peso inválido");
	tdImc.textContent = "Peso inválido";
	pesoValido = false;
}

if (altura <= 0 || altura > 2.50){

	console.log("altura inválida");
	tdImc.textContent = "Altura inválida";
	alturaValida = false;
}

if (pesoValido && alturaValida){
	
	var imc = peso / (altura * altura);
	tdImc.textContent = imc;
}






