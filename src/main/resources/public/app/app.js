"use strict";
(function () {

    angular.module("minimalg", ["ui.router",
        "ui.bootstrap",
//        'satellizer',
        'restangular',
        'mg.places',
        'mg.faces',
        'mg.templates'
    ])

        .config(function ($stateProvider, $urlRouterProvider, $sceProvider, RestangularProvider) {
            RestangularProvider.setBaseUrl('/api/v1');

            $urlRouterProvider.otherwise("/main/places");
            $stateProvider
                .state("main", {
                    abtract: true,
                    url: "/main",
                    templateUrl: "app/main.html",
                    controller: 'MainCtrl'
                })
                .state("main.places", {
                    url: "/places",
                    templateUrl: "app/places/places.tpl.html",
                    controller: 'PlacesCtrl'})
                .state("main.faces", {
                    url: "/faces",
                    templateUrl: "app/faces/faces.tpl.html",
                    controller: 'FacesCtrl'})
                .state("main.login", {
                    url: "/login",
                    templateUrl: "app/login/login.tpl.html",
                    controller: 'LoginCtrl'});
        })

        .controller("MainCtrl", ['$rootScope', '$scope', '$log' , '$state', '$modal', 'Restangular', '$location',
            function ($rootScope, $scope, $log, $state, $modal, Restangular, $location) {
                $scope.test = 'pupa';
                $scope.navbarCollapsed = true;
                $scope.isActive = function (viewLocation) {
                    return viewLocation === $location.path();
                };

            }]
    )


        .controller("LoginCtrl", ['$rootScope', '$scope', '$log' , '$state', '$modal', 'Restangular', '$location',
            function ($rootScope, $scope, $log, $state, $modal, Restangular, $location) {

            }]);

    angular.module('mg.places', []);
    angular.module('mg.faces', []);
    angular.module('mg.common', []);
}());