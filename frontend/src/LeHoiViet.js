angular.module('LeHoiViet', []);

var myModule = angular.module('LeHoiViet',
    [
        'ngRoute',
        'LeHoiViet.Common',
        'LeHoiViet.Login',
        'LeHoiViet.Festival',
        'LeHoiViet.Review',
        'LeHoiViet.User',
    ]);

myModule.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'src/login/template/login.html',
            controller: 'LoginCtrl'
        });
    });

myModule.config(function($httpProvider) {
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    });