(function () {
    'use strict';
    angular.module('app')
        .config(function ($stateProvider) {
            $stateProvider
                .state("home", {
                    url: '/home',
                    templateUrl: "app/home/home.html",
                    controller: "homeController",
                    controllerAs: "homeCtrl",
                })
        })
})();