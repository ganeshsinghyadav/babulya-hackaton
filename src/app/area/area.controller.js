'use strict';

angular.module('babulya')
        .controller('AreasCtrl', function($scope, $state, $http, $localStorage) {

    $scope.username = $localStorage.user.name;
    
    var ids = OrmStorage.getIds('area');
    $scope.areas  =  OrmStorage.getStoredObjects(ids,'area');
    
console.log($scope);
    $scope.chooseVolonter = function(areaId) {
            console.log(areaId);


    }

});
