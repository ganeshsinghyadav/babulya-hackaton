'use strict';

angular.module('babulya')
  .controller('HomeCtrl', function($scope, $state, $http, $localStorage) {
    $scope.username = $localStorage.user.name;
    $http.get('http://velopatrol.in.ua/api/user/' + $localStorage.user.id)
      .success(function(challanges) {
        console.log(challanges);
      });

    var ids = OrmStorage.getIds('challenge');
    $scope.challenges = OrmStorage.getStoredObjects(ids, 'challenge');

    $scope.newChallange = function() {
      $state.go('areas');
    };

    $scope.more = function(id) {
      $state.go('areas');
    };

  });
