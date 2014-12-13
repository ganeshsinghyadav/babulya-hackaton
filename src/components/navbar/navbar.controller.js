'use strict';

angular.module('babulya')
  .controller('NavbarCtrl', function ($scope, $modal, $log) {
    $scope.open = function(size) {
      var modalInstance = $modal.open({
        templateUrl: 'app/auth/authModal.html',
        size: size,
      });
    };
  });
