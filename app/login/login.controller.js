(function () {
    'use strict';
    angular.module('app')
        .controller('loginController', loginController);

    function loginController() {
        console.log('Login ctrl called');
        var vm = this;
        vm.title = 'Login title from controller';
    }
})();
