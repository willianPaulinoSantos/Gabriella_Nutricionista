var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function () {

	event.preventDefault();

	var form = document.querySelector("#form-adiciona");
	var paciente = obtemPacienteDoFormulario(form);
	var trPaciente = montaTr(paciente);	
	
	var erros = validaPaciente(paciente);
	console.log(erros);

	if(erros.length > 0){
		limparErros();
		exibeMensagensDeErros(erros);
		return;
	}
	
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(trPaciente);
	limparErros();
	form.reset();
});

function obtemPacienteDoFormulario(form){

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;

}

function montaTr(paciente){

	var trPaciente = document.createElement("tr");
	trPaciente.classList.add("paciente");

	trPaciente.appendChild(montaTd(paciente.nome, "info-nome"));
	trPaciente.appendChild(montaTd(paciente.peso, "info-peso"));
	trPaciente.appendChild(montaTd(paciente.altura, "info-altura"));
	trPaciente.appendChild(montaTd(paciente.gordura, "info-gordura"));
	trPaciente.appendChild(montaTd(paciente.imc, "info-imc"));

	return trPaciente;
}

function montaTd (paciente, classe){

	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = paciente;
	return td;
}

function validaPaciente(paciente){

	var erros = [];
	validaPeso(paciente.peso);
	validaAltura(paciente.altura);

	if(paciente.nome.length == 0){

		erros.push("O nome não pode ficar em branco");
	}

	if(paciente.peso.length == 0){

		erros.push("O peso não pode ficar em branco");

	}else if(!validaPeso(paciente.peso)){

		erros.push("Peso inválido");
	}

	if(paciente.altura.length == 0){

		erros.push("A altura não pode ficar em branco");

	}else if(!validaAltura(paciente.altura)){

		erros.push("Altura inválida");
	}

	if(paciente.gordura.length == 0){

		erros.push("A gordura não pode ficar em branco");
	}
	return erros;
}

function exibeMensagensDeErros(erros){

	var ul = document.querySelector("#mensagens-erro");

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	})
}

function limparErros(){

	var mensagemErro = document.querySelector("#mensagens-erro");
	mensagemErro.innerHTML = "";
}