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
    }, {
      'id': '#aboutUs',
      'title': 'Про нас'
    }, {
      'id': '#awesomeThings',
      'title': 'Переваги'
    }, {
      'id': '#volunteers',
      'title': 'Волонтери'
    }, {
      'id': '#footer',
      'title': 'Соціальні мережі'
    }];

  })
  .directive('scrollOnClick', function() {
    return {
      restrict: 'A',
      link: function(scope, $elm, attrs) {
        var idToScroll = attrs.href;
        $elm.on('click', function() {
          var $target;
          if (idToScroll) {
            $target = $(idToScroll);
          } else {
            $target = $elm;
          }
          $('body').animate({
            scrollTop: $target.offset().top
          }, 'slow');
        });
      }
    };
  })
  .directive('scroll', function($window) {
    return function(scope) {
      angular.element($window).bind('scroll', function() {
        if ($('.navbar').hasClass('static')) {
          $('.navbar').addClass('top-nav-collapse');
          return;
        }

        if ($('.navbar').offset().top > 50) {
          $('.navbar-fixed-top').addClass('top-nav-collapse');
        } else {
          $('.navbar-fixed-top').removeClass('top-nav-collapse');
        }

        scope.$apply();

        $('.navbar-collapse ul li a').click(function() {
          $('.navbar-toggle:visible').click();
        });
      });
    };
  });
