'use strict';

angular.module('babulya')
  .controller('MainCtrl', function($scope, $http) {
    var volunteerUrl = 'http://velopatrol.in.ua/api/volunteer/list';

    $http.get(volunteerUrl)
    .success(function(data) {
      $scope.volunteers = data;
    })
    .error(function(data) {
      console.error(data);
    });

    $scope.awesomeThings = [{
      'title': 'Доставка медикаментів',
      'description': 'Для людей з обмеженими можливостями',
      'logo': 'browsersync.png',
      'icon': 'fa-plus-circle'
    }, {
      'title': 'Необхідно провести додому?',
      'description': 'Затрималася в бібліотеці і страшно йти додому?',
      'logo': 'browsersync.png',
      'icon': 'fa-female'
    }, {
      'title': 'Доставка продуктів харчування',
      'description': 'Закінчилася їжа, а йти влом? Замов доставку!',
      'logo': 'browsersync.png',
      'icon': 'fa-shopping-cart'
    }];
  });
