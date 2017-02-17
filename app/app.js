(function () {
    'use strict';

    angular.module('app', ['ui.router'])
        .run(checkLogin)
        .config(function ($stateProvider) {
            $stateProvider
                .state("login", {
                    url: '/login',
                    templateUrl: "app/login/login.html",
                    controller: "loginController",
                    controllerAs: "loginCtrl"
                })
                .state("home", {
                    url: '/home',
                    templateUrl: "app/home/home.html",
                    controller: "homeController",
                    controllerAs: "homeCtrl",
                    // resolve: {
                    //     checkLogin: checkLogin
                    // }
                })
        })
        .controller('mainController', mainController);

    function mainController() {
        var vm = this;
        vm.siteTitle = "SITE NAME";
    }

    function checkLogin($rootScope, $state, loginService) {
        // localStorage.setItem('userId', 111);
        localStorage.clear();
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (toState.name !== 'login') {
                if (!loginService.loggedIn()) {
                    event.preventDefault();
                    $state.go("login");
                }
            }
        });
    }


})();
