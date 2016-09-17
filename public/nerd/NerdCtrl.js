// public/js/controllers/NerdCtrl.js
angular.module('NerdCtrl', []).controller('NerdCtrl', function($scope, $http) {
    $scope.tagline = 'Nothing beats a pocket protector!';
    $scope.getAllNerd = getAllNerd;
    $scope.addNerd = addNerd;

    function getAllNerd(){
        alert('Button clicked');
        $http.get('/api/nerds').
        then(function successCallback(response) {
            alert(response);
            console.log(response);
        }, function errorCallback(response) {
            alert(response);
            console.log(response);
        });
    }

    function addNerd(){
        alert('Button clicked');
        $http.post('/api/nerds', {'name':'Test Post'}).
        then(function successCallback(response) {
            alert(response);
            console.log(response);
        }, function errorCallback(response) {
            alert(response);
            console.log(response);
        });
    }
});
