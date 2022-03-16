var tabela = document.querySelector("#tabela-pacientes");
console.log(tabela);

tabela.addEventListener("dblclick", function(event){
  if(event.target.tagName == "TD"){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
    event.target.parentNode.remove();
    }, 500);
  }
})




/*Anotações
- A função setTimeout(parametro1, parametro2) pausa a execução do programa como um todo e inicia a execução da função recebida como
parâmetro após um determinado período de tempo (segundo parâmetro, medido em milisegundos)
Nessa linha de código acima, estamos selecionando a tabela, depois adicionamos um escutador de eventos na
tabela toda. Mas não queremos excluir a tabela toda no double click. É possível adicionar um escutador no elemen
to pai e executar esse evento nos elementos filhos (conceito de bobble event), em alvos (targets) específicos.
Para remover somente a linha (tr) correspondente à célula (td) que clicamos,
utilizamos o evento.target.parentNode.remove(); event.target acessa o elemento que foi clicado (alvo), .parentNode
acessa o pai do evento alvo, .remove removo o evento pai do evento alvo.
Assim, ao clicarmos no evento alvo célula (td), o programa acessa o alvo, depois o pai dele (linha / tr)
e o remove.
Como colocamos o escutador na tabela, quando um novo paciente é adicionado conseguiremos acessá-lo e removê-lo,
pois este fará parte da tabela, sendo portanto suscetível ao evento disparado no double click.



/*
O código abaixo foi a primeira solução que pensei para excluir, ao duplo click, o paciente clicado da tabela,
incluindo um paciente que foi adicionado após o carregamento da página, o que era feito chamando a função
removePacientes(); dentro da função adicionaPaciente();. Funcionou bem, contudo no curso foi mostrado conceitos
que permitem fazer o mesmo com um código mais enxuto, além de ampliar os meus limites técnicos.

removePacientes();
function removePacientes(){
  var pacientes = document.querySelectorAll(".paciente");
  console.log(pacientes);

  pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
      this.remove();
    });
  });
}*/
