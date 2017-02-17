(function() {
    'use strict';
    angular.module('app')
        .config(function($stateProvider) {
            $stateProvider
                .state("contacts", {
                    url: '/contacts',
                    templateUrl: "app/contacts/contacts.html",
                    controller: "contactsController",
                    controllerAs: "contCtrl"
                })
        })
})();
