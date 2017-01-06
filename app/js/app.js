var app = angular.module('todoApp', []);

app.controller('todoCtrl', function ($scope) {
    $scope.title = 'Enter a task';
    $scope.remaining = 2;
    $scope.todos = [
        {
            name : 'Task incomplete',
            completed : false
        },
        {
            name : 'Task complete',
            completed : false
        }
    ]
});