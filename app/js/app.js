var app = angular.module('todoApp', []);


app.controller('todoCtrl', function ($scope, filterFilter, $http, $location){
    $scope.todos = [];
    $scope.placeholder = "New task..";
    $scope.statusFilter = {};
    $http.get('todo.json').then(function(response) {
        $scope.todos = response.data;
    });

    $scope.title = 'Enter a task';

    $scope.$watch('todos', function() {
        $scope.remaining = filterFilter($scope.todos, {completed:false}).length;
        $scope.allChecked = !$scope.remaining;
    }, true);

    if($location.path() == ''){
        $location.path('/');
    }
    $scope.location = $location;
    $scope.$watch('location.path()', function (path) {
       $scope.statusFilter =
           (path == '/active') ? {completed : false} :
           (path == '/done') ? {completed : true} : null;
    });

    $scope.deleteTask = function(index) {
        $scope.todos.splice(index, 1);
    }

    $scope.addTodo = function() {
        $scope.todos.push({
            name : $scope.newTodo,
            completed: false
        });
        $scope.newTodo = '';
    }

    $scope.editTask = function(todo){
        todo.editing = false;
    }

    $scope.checkAllTodo = function(allChecked) {
        $scope.todos.forEach(function(todo){
            todo.completed = allChecked;
        });
    }
});