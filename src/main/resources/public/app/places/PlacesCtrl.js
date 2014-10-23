"use strict";
angular.module('mg.places')
    .controller('PlacesCtrl', ['$rootScope', '$scope', 'Restangular',

        function ($rootScope, $scope, Restangular) {
            $scope.model = {selected: 'Moscow', places: []};
            var refresh = function () {
                Restangular.one('place').getList().then(function (data) {
                    $scope.model.places = data;
                });
            };
            refresh();

            $scope.add = function (val) {
                Restangular.one('place', val).put().then(function () {
                    refresh();
                });
            };
        }
    ]);