(function(angular) {
    'use strict';

    angular
        .module('App', [])
        .controller('MainController', MainController);

    /* @ngInject */
    function MainController($scope, $http) {
        var vm = this;

        vm.title = 'User List';
        
        $http.get('http://api.randomuser.me/?results=10').success(function(data) {
          vm.users = data.results;
        });

        vm.setCurrent = function (user) {
          vm.current = user;
        }
    }
})(window.angular);