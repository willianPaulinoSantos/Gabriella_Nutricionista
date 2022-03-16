
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";



var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);
//var paciente = document.querySelector("#primeiro_paciente"); // puxa a tr do primeiro paciente

for (var i = 0; i < pacientes.length; i++)
{
  var paciente = pacientes[i];
  var peso = paciente.querySelector(".info-peso"); // puxa a td peso do primeiro paciente.
  peso = parseFloat(peso.textContent); // converte o conteúdo de texto da td para um numero inteiro.

  var altura = paciente.querySelector(".info-altura"); // faz a mesma coisa explicada acima.
  altura = parseFloat(altura.textContent)

  var tdImc= paciente.querySelector(".info-imc");


  var validadePeso = validaPeso(peso);
  var validadeAltura = validaAltura(altura);

  if (!validadePeso)
  {
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }
  else if(!validadeAltura)
  {
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }
  if (validadePeso && validadeAltura)
  {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc; // a função toFixed(numero de casas decimais) ajusta o n de casas mostradas.
  }
  //console.log(peso + ", " + altura);
}
function calculaImc(peso, altura)
{
  var imc = 0;

  imc = peso / (altura*altura);
  return imc.toFixed(2);
}

function validaPeso(peso)
{
  if (peso >= 0 && peso < 500)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function validaAltura(altura)
{
  if (altura > 0 && altura <= 3)
  {
    return true;
  }
  else
  {
    return false;
  }
}




/*Anotações
Neste capítulo -- eventos, formulários e criando elementos -- implementamos a criação de usuários a partir de um formulário, e com isso aprendemos:

A diferença entre as funções nomeadas e as funções anônimas
A escutar eventos do browser com a função addEventListener()
Que a função criadora de elementos é .createElement()
A pegar o valor de um input por meio da propriedade .value
A acessar os input de um form por meio da propriedade .name
A adicionar elementos na página e dentro de outros elementos com a função appendChild()*/
