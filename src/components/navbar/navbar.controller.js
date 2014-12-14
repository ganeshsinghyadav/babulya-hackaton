'use strict';

angular.module('babulya')
  .controller('NavbarCtrl', function($scope, $modal, $log) {
    $scope.navbarCollapsed = true;

    $scope.open = function(size) {
      var modalInstance = $modal.open({
        controller: 'AuthCtrl',
        templateUrl: 'app/auth/authModal.html',
        size: size,
      });

      modalInstance.result.then(function(selectedItem) {
        $scope.selected = selectedItem;
      }, function() {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.items = [{
      'id': '#main',
      'title': 'Головна'
    },{
      'id': '#aboutUs',
      'title': 'Про нас'
    },{
      'id': '#awesomeThings',
      'title': 'Переваги'
    },{
      'id': '#volunteers',
      'title': 'Волонтери'
    },{
      'id': '#footer',
      'title': 'Соціальні мережі'
    },];

  });
