var botaoAdicionar = document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click", function(){

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); 

	xhr.addEventListener("load", function(){
		var erroAjax = document.querySelector("#erro-ajax");

		if (xhr.status == 200){
			var resposta = xhr.responseText;
			var pacientes = JSON.parse(resposta);
			adicionaPacientesNaTabela(pacientes);
			erroAjax.classList.add("invisivel");
		}else{
			erroAjax.classList.remove("invisivel");
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
		

	});

	xhr.send();
});