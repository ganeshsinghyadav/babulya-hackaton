'use strict';

angular.module('babulya')
  .controller('MainCtrl', function($scope, $http, $localStorage, $state, $modal) {
    var volunteerUrl = 'http://velopatrol.in.ua/api/volunteer/list';

    $http.get(volunteerUrl)
      .success(function(data) {
        $scope.volunteers = data;
      })
      .error(function(data) {
        console.error(data);
      });

    $scope.login = function() {

      $http({
        method: 'POST',
        url: 'http://velopatrol.in.ua/api/user/new',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: function(obj) {
          var str = [];
          for (var p in obj) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
          }
          return str.join('&');
        },
        data: $scope.user
      }).success(function(user) {
        $scope.user = user;

            if (!user.id) {
                $scope.error = user.message;
            } else {
                $localStorage.user = user;
                OrmStorage.storeObjects('challenge',user.challenges);
                $state.go('home');
                
            }
        });
    };

    $http.get('http://velopatrol.in.ua/api/area/list').success(function(areas) {
      OrmStorage.storeObjects('area', areas);
    });
    $http.get('http://velopatrol.in.ua/api/volunteer/list').success(function(volunteers) {
      OrmStorage.storeObjects('volunteer', volunteers);
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
