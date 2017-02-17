(function() {
    'use strict';

    angular.module('app')
        .controller('contactsController', contactsController);

    function contactsController() {
        var vm = this;
        vm.title = "Title of contacts";
    }
})();
