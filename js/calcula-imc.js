var pacientes = document.querySelectorAll(".paciente");
/*console.log(pacientes);*/

var pesoValido = true;
var alturaValida = true;

for (var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	/*console.log(tdPeso);
	console.log(tdAltura);
	console.log(tdImc);
	console.log(peso);
	console.log(altura);*/
		
	pesoValido = validaPeso(peso);
	alturaValida = validaAltura(altura);

	if (!pesoValido){
		tdImc.textContent = "Peso inválido";
		pesoValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaValida){
		tdImc.textContent = "Altura inválida";
		alturaValida = false;
		paciente.classList.add("paciente-invalido");
	}

	if(pesoValido && alturaValida){

		tdImc.textContent = calculaImc(peso, altura);

	}
}

function calculaImc(peso, altura){

	var imc = peso / (altura * altura);
	return imc.toFixed(2);

}

function validaPeso(peso){

	if (peso <= 0 || peso >= 595){

		pesoValido = false;
	}
	else
	{
		pesoValido = true;
	}
	return pesoValido;
}

function validaAltura(altura){

	if (altura <= 0 || altura > 2.50){

		
		alturaValida = false;
		
	}	
	return alturaValida;
}




