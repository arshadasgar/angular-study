(function() {
    'use strict';
    angular.module('app')
        .factory('loginService', loginService);

    function loginService() {
        return {
            loggedIn: function() {
                if (localStorage.getItem('userId'))
                    return true;
                return false;
            }
        }
    }
})();
