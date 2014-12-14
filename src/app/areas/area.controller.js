'use strict';

angular.module('babulya')
        .controller('AreaCtrl', function($scope, $state, $http, $localStorage) {

    $scope.username = $localStorage.user.name;
    
    var ids = OrmStorage.getIds('area');
    $scope.areas  =  OrmStorage.getStoredObjects(ids,'area');
    

    $scope.chooseVolonter = function(areaId) {
        $state.go('area',{'id':areaId});
    
    }

});
