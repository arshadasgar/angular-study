(function () {
    'use strict';
    angular.module('app')
        .controller('loginController', loginController);

    function loginController() {
        var vm = this;
        vm.title = 'Login title from controller';
    }
})();
