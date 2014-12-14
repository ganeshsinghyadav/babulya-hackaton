'use strict';

angular.module('babulya')
  .controller('AreaCtrl', function($scope, $state, $http, $localStorage) {

    $scope.username = $localStorage.user.name;

    $scope.area = OrmStorage.getStoredObject($state.params.id, 'area');

    $scope.volunteers = OrmStorage.getStoredObjects($scope.area.volunteers, 'volunteer');

    $scope.chooseVolonter = function(volunteerId) {
      $state.go('newchallenge', {
        'id': volunteerId
      });
    };

  });
