var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

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




function calculaImc(){

	if (pesoValido && alturaValida){
		
		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);
	}

}


function validaPeso(peso){

	if (peso <= 0 || peso >= 595){

	console.log("Peso inválido");
	tdImc.textContent = "Peso inválido";
	pesoValido = false;
	}

	return pesoValido;
}



function validaAltura(altura){

	if (altura <= 0 || altura > 2.50){

		console.log("altura inválida");
		tdImc.textContent = "Altura inválida";
		alturaValida = false;
	}

	return alturaValida;
}




