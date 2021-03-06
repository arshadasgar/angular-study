(function () {
    'use strict';

    angular.module('app', ['ui.router'])
        .run(checkLogin)
        .config(function ($stateProvider, $urlRouterProvider) {
        	
        		//including routeprovider only for setting the default root
        		$urlRouterProvider.otherwise('/login');
        		
            $stateProvider
            	 .state("login", {
                    url: '/login',
                    templateUrl: "app/login/login.html",
                    controller: "loginController",
                    controllerAs: "loginCtrl"
                })
                .state("logout", {
                    url: '/logout',
                    controller: "logoutController",
                    controllerAs: "logoutCtrl",
                })
        })
        .controller('mainController', mainController);

    function mainController() {
        var vm = this;
        vm.siteTitle = "SITE NAME";
    }

    function checkLogin($rootScope, $state, loginService) {
        localStorage.setItem('userId', 111);
        //localStorage.clear();
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (toState.name !== 'login') {
                if (!loginService.loggedIn()) {
                    event.preventDefault();
                    $state.go("login");
                }
            } else {
                if (loginService.loggedIn()) {
                    event.preventDefault();
                    $state.go("home");
                }
            }
        });
    }


})();
