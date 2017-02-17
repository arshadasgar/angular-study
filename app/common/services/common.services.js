(function () {
    'use strict';
    angular.module('app')
        .factory('commonService', commonService);

    function commonService() {
        return {
            logout: function () {
                localStorage.clear();
            }
        }
    }
})();
