(function () {
    'use strict';
    angular.module('app')
        .controller('logoutController', logoutController);

    function logoutController($state, commonService) {
        commonService.logout();
        $state.go('login');
    }
})();
