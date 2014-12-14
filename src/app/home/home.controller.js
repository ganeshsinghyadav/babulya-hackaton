'use strict';

angular.module('babulya')
  .controller('HomeCtrl', function($scope, $state, $http, $localStorage) {
    $scope.username = $localStorage.user.name;
    $http.get('http://velopatrol.in.ua/api/user/' + $localStorage.user.id)
      .success(function(challanges) {
        console.log(challanges);
      });

    $scope.newChallange = function() {
      $state.go('areas');
    };
  });
