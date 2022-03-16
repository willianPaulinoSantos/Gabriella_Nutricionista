var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", adicionaPaciente);


function adicionaPaciente(event)
{
    event.preventDefault();//evita que o comportamento padrão do evento seja executado.

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemDadosForm(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0)
    {
      exibeMensagemDeErro(erros);
      form.reset();
    }
    else
    {
      adicionaPacientesNaTabela(paciente);
      form.reset();
      var ul = document.querySelector("#mensagens-erro");
      ul.innerHTML = ""; //substitui o conteúdo da tag selecionada pelo valor entre aspas.
    }
}

function adicionaPacientesNaTabela(pacientes)
{
  pacientes.forEach(function(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
  })
  
}

function obtemDadosForm(form)
{
  // declara o objeto paciente e atribui valores à suas características.
  // EM OBJETOS UTILIZAMOS ":" AO INVÉS DE "=" PARA ATRIBUIR VALORES.
  var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente)
{
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe)
{
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;
  return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0 && !isNaN(paciente.nome)){
      erros.push("Nome em branco.");
    }

    if (paciente.peso.length == 0) {
          erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
         erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
      erros.push("Peso inválido.");
    }

    if (!validaAltura(paciente.altura)) {
      erros.push("Altura inválida.");
    }

    if (paciente.gordura.length == 0){
      erros.push("Porcentual de gordura em branco.")
    }
  return erros;
}

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
    })
}


/*Anotações
return; --> faz o programa sair da função atual.


Muitas vezes pode ser que criar funções aqui ou ali possa estar aumentando as linhas de código que
resolvem nosso problema. No entanto, quando esse código extra visa melhorar a sua legibilidade e manutenção,
ele é muito bem-vindo!

Antes os códigos dos arquivos calculaImc.js e form.js estavam num mesmo arquivo denominado principal.js
Acontece que é uma boa prática separar os códigos por funcionalidade, para cada arquivo uma funcionalidade
para que assim, o código fique mais legível. Caso contrário, o arquivo principal ficaria enorme e tornaria
complicado o processo de buscar por uma parte responsável por uma determinada funcionalidade.
LEMBRE-SE SEMPRE DE IMPORTAR O NOVO ARQUIVO PARA O ARQUIVO HTML*/
/*VANTAGENS E DESVANTAGENS DE MANTER O CODIGO EM UM UNICO ARQUIVO:
A vantagem de declararmos todas as funções em um único arquivo é favorecer sua importação em nossas páginas,
pois se fossem vários arquivos precisaríamos importar um a um.

Uma desvantagem dessa abordagem é que fica complicado para mais de um desenvolvedor trabalhar com o mesmo
arquivo ao mesmo tempo. Se o desenvolvedor A precisa alterar a função X e o desenvolvedor B a função Y
o risco do trabalho ser perdido quando o arquivo for atualizado é grande. Mesmo com
ferramentas de versionamento de código o desenvolvedor terá que resolver conflitos que são bastantes comuns
nessa abordagem.

Outro ponto é o seguinte. Se das 100 funções declaradas no arquivo apenas um necessitar manutenção,
caso o desenvolvedor cometa algum erro de sintaxe, isso comprometerá todas as funções, pois nada será
mais carregado. Sendo assim, as chances de introduzir problemas quando for resolver um são bem maiores.

Quando temos arquivos separados, cada arquivo possui uma responsabilidade e uma ou mais funções que
fazem sentido naquela responsabilidade. Por exemplo, podemos ter um arquivo chamado conversao.js e nele
termos funções que convertem valores monetários com R$ para números, e números para o formato com R$.
Além disso, se separamos outras funcionalidades por arquivo, quando alterarmos esses arquivos,
se cometermos algum erro, apenas uma ou mais funções do arquivo serão comprometidas e o restante dos
outros arquivos poderão ser carregados sem problema (a não ser que um arquivo dependa do outro).

Por fim, assim como na vida real geralmente guardamos peças de roupas por categorizações que julgamos
satisfazerem nossa organização, separar arquivos por grupos comuns também nos ajuda a encontrar e dar
869manutenção em nosso código.

Neste capítulo - 05 Boas Práticas com Javascript -  vimos

Dividir o código, separando por funcionalidades do sistema
Os objetos em Javascript
A quebrar funções grandes em funções menores ,com cada uma com sua responsabilidade
A função form.reset() para limpar o formulário

Neste capítulo - 06 validando formulário -  vimos:

Mais organização de código, exportando as funções de validação.
O operador de negação NOT (!)
Como validar um formulário
A função push para colocar elementos dentro de um array
A propriedade innerHTML dos elementos, que foi usada para apagar os itens da <ul>
O método forEach para percorrer arrays

*/
/*Explicação forEach
forEach é uma função de repetição - loop - parecida com o for. A diferença é que ao invés de definir um índice
uma condição de repetição, e um incremento do índice, no forEach você só precisa de um array e setar uma fun-
ção como parâmetro. forEach irá repetir as ações dessa função em cada valor do array, parando quando chegar ao
último valor(\n), sem que precisemos informar o tamanha=o do array. Por exemplo:

var numeros = [1, 2, 3, 4, 5, 6,];
var ul = document.querySelector(".numeros");

numeros.forEach(function(numero){
	 var li = document.createElement("li");
	 li.textContent = numero*2;
	 ul.appendChild(li);
})
Esse programa pega cada valor do array numeros e multiplica por 2. Depois cria uma li para cada valor e
coloca cada valor no conteúdo da li criada. */
