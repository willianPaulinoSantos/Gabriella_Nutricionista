var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function () {

	event.preventDefault();

	var form = document.querySelector("#form-adiciona");
	var paciente = obtemPacienteDoFormulario(form);
	var trPaciente = montaTr(paciente);	
	console.log(paciente);

	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(trPaciente);
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
