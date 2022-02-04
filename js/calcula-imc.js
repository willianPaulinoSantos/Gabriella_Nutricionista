var pacientes = document.querySelectorAll(".paciente");


var pesoValido = true;
var alturaValida = true;

for (var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");
		
	pesoValido = validaPeso(peso);
	alturaValida = validaAltura(altura);

	if (!pesoValido){
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaValida){
		tdImc.textContent = "Altura inválida";
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

	if (peso < 0 || peso >= 595){

		return false;

	}else{

		return true;
	}
}

function validaAltura(altura){

	if (altura < 0 || altura > 2.50){

		return false;
		
	}else{

		return true;
	}	
	
}




