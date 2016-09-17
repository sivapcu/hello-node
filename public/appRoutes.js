// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    // home page that will use the MainController
    .when('/', {
        templateUrl: 'home/view/home.html',
        controller: 'MainCtrl'
    })
    // nerds page that will use the NerdController
    .when('/nerds', {
        templateUrl: 'nerd/view/nerd.html',
        controller: 'NerdCtrl'
    })
    // geeks page that will use the GeekController
    .when('/geeks', {
        templateUrl: 'geek/view/geek.html',
        controller: 'GeekCtrl'
    });

    $locationProvider.html5Mode(true);

}]);
