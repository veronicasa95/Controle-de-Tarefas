(function() {


  angular.module('myApp', [])

    .controller('UserCtrl', ['$scope', function($scope) {

        var buscar = function(lista, item) {
          let exists = false;
          for(let i = 0; i < lista.length; i++) {
            if(lista[i].toUpperCase() === item.toUpperCase()) {
               exists = true;
               break;
            }
          }
          return exists;
      }

      $scope.tarefas =  [ 
            { nome: 'Varrer o quarto', categoria: 'Casa', feito: false },
            { nome: 'Lavar a louça', categoria: 'Casa', feito: true }, 
            { nome: 'Lavar as roupas', categoria: 'Casa', feito: false }, 
            { nome: 'Consertar a porta', categoria: 'Casa', feito: false }, 
            { nome: 'Terminar o relatório', categoria: 'Trabalho', feito: false }, 
            { nome: 'Estudar para a próxima reunião', categoria: 'Trabalho', feito: false }, 
            { nome: 'Enviar email sobre o problema', categoria: 'Trabalho', feito: false },
            { nome: 'Levar pó de café', categoria: 'Trabalho', feito: true }, 
            { nome: 'Comprar canetas novas', categoria: 'Trabalho', feito: true }, 
            { nome: 'Estudar Etapa 1', categoria: 'Faculdade', feito: true }, 
            { nome: 'Estudar Etapa 2', categoria: 'Faculdade', feito: true }, 
            { nome: 'Estudar Etapa 3', categoria: 'Faculdade', feito: false }, 
            { nome: 'Fazer TP1', categoria: 'Faculdade', feito: false } 
            ]; 

      $scope.tarefasConcluidas = function () {
        const feitas = [];
        for(var i = 0; i < $scope.tarefas.length; i++){
            const tarefa = $scope.tarefas[i];
            if (tarefa.feito) {
                feitas.push(tarefa)
            }
        }
        return feitas;
      } 

      $scope.tarefasPendentes = function () {

        const pendente = [];
        for(var i = 0; i < $scope.tarefas.length; i++){
            const tarefa = $scope.tarefas[i];
            if (!tarefa.feito) {
                pendente.push(tarefa)
            }
        }
        return pendente;
      } 

     $scope.choiceCategoria = function(){
        $scope.concluidoo = true;
        $scope.pendentee = true;
        $scope.categg = true;
      }

    $scope.choicetarefa = function(){
        $scope.concluidoo = true;
        $scope.pendentee = true;
        $scope.categg = false;
        $scope.tarefaa = true;
      }

     $scope.categorias = function(categoria) {       
        const listaNomes = [];      
        for(var i = 0; i < $scope.tarefas.length; i++){
            const tarefa = $scope.tarefas[i];

            if (tarefa.categoria){ 
                if(!buscar(listaNomes, tarefa.categoria)){
                    listaNomes.push(tarefa.categoria) ; 
                }                                                                             
            }
        }
        return listaNomes; 
        }    

    $scope.adicionar = function(){        
      if(buscar($scope.categorias(), $scope.novaCategoria)) {
        $scope.mensagem = "Categoria já existente. Inclua categoria válida."
    } else {
        $scope.tarefas.push({ categoria: $scope.novaCategoria});
        $scope.mensagem = "Categoria cadastrada."
        }              
    } 

    $scope.keyPressing = function ($event) {
        console.log("Event: ",$event.charCode);
        if($event.charCode == 13) {
            $scope.adicionar();
        }
    } 

    $scope.tarefaAba = function(){

    }
       
    }]);
})();