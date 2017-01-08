var app = angular.module('todoApp', []);

app.controller('todoCtrl', function ($scope, filterFilter, $http){

    $http.get('todo.json').success(function (data) {
        $scope.todos = data;
    });

    $scope.title = 'Enter a task';
    $scope.todos = [
        {
            name : 'Task incomplete',
            completed : false
        },
        {
            name : 'Task complete',
            completed : true
        }
    ]

    $scope.$watch('todos', function() {
        $scope.remaining = filterFilter($scope.todos, {completed:false}).length;
        $scope.allChecked = !$scope.remaining;
    }, true);

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

    $scope.checkAllTodo = function(allChecked) {
        $scope.todos.forEach(function(todo){
            todo.completed = allChecked;
        });
    }
});