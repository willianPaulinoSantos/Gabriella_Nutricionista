var pacientes = document.querySelectorAll(".paciente");
/*console.log(pacientes);*/

var pesoValido = true;
var alturaValida = true;

for (var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i];
	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");
	var tdImc = paciente.querySelector(".info-imc");

	/*console.log(tdPeso);
	console.log(tdAltura);
	console.log(tdImc);*/

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;

	/*console.log(peso);
	console.log(altura);*/
		
	pesoValido = validaPeso(peso);
	alturaValida = validaAltura(altura);
	calculaImc(pesoValido, alturaValida);

}



var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function () {

	event.preventDefault();
	var form = document.querySelector("#form-adiciona");
	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	/*console.log(form);
	console.log(nome);
	console.log(peso);
	console.log(altura);
	console.log(gordura);*/

	var trPaciente = document.createElement("tr");
	trPaciente.classList.add("paciente");

	var tdNome = document.createElement("td");
	tdNome.classList.add("info-nome");

	var tdPeso = document.createElement("td");
	tdPeso.classList.add("info-peso");

	var tdAltura = document.createElement("td");
	tdAltura.classList.add("info-altura");

	var tdGordura = document.createElement("td");
	tdGordura.classList.add("info-gordura");

	var tdImc = document.createElement("td");
	tdImc.classList.add("info-imc");

	trPaciente.appendChild(tdNome);
	trPaciente.appendChild(tdPeso);
	trPaciente.appendChild(tdAltura);
	trPaciente.appendChild(tdGordura);
	trPaciente.appendChild(tdImc);

	tdNome.textContent = nome;
	tdPeso.textContent = peso;
	tdAltura.textContent = altura;
	tdGordura.textContent = gordura;
	tdImc.textContent = (peso / (altura * altura)).toFixed(2);

	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(trPaciente);

	/*console.log(trPaciente);
	console.log(tdNome);*/
});











function calculaImc(){

	if (pesoValido && alturaValida){
		
		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);
	}
}

function validaPeso(peso){

	if (peso <= 0 || peso >= 595){

	tdImc.textContent = "Peso inválido";
	pesoValido = false;
	paciente.classList.add("paciente-invalido");
	
	}
	return pesoValido;
}

function validaAltura(altura){

	if (altura <= 0 || altura > 2.50){

		tdImc.textContent = "Altura inválida";
		alturaValida = false;
		paciente.classList.add("paciente-invalido");
	}

	return alturaValida;
}




