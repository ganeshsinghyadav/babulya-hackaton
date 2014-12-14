/*jslint browser: true */
'use strict';

var OrmStorage = {
  storeObject: function(name, obj, unset) {
    if (unset) {
      delete obj[unset];
    }
    window.localStorage[name + '-' + obj.id] = JSON.stringify(obj);
  },
  getIds: function(name) {
    return JSON.parse(window.localStorage['ids-' + name]);
  },
  setIds: function(name, ids) {
    window.localStorage['ids-' + name] = JSON.stringify(ids);
  },
  storeObjects: function(name, objects) {
    var ids = [];
    for (var index in objects) {
      OrmStorage.storeObject(name, objects[index]);
      ids.push(objects[index].id);
    }
    OrmStorage.setIds(name, ids);
  },
  getStoredObject: function(id, name) {
    if (window.localStorage[name + '-' + id]) {
      return JSON.parse(window.localStorage[name + '-' + id]);
    } else {
      console.log('No object for key:' + name + '-' + id);
      return null;
    }
  },
  getStoredObjects: function(ids, name) {
    var objects = [];

    if (ids) {
      for (var index in ids) {
        var key = ids[index];
        if (window.localStorage[name + '-' + key]) {
          objects.push(JSON.parse(window.localStorage[name + '-' + key]));
        } else {
          console.log('No object for key:' + name + '-' + key);
        }
      }
    }
    return objects;
  }
};


angular.module('babulya', ['ngStorage', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/index.html',
        controller: 'HomeCtrl'
      })
      .state('areas', {
        url: '/areas',
        templateUrl: 'app/areas/index.html',
        controller: 'AreasCtrl'
      })
      .state('area', {
        url: '/area/:id/',
        templateUrl: 'app/area/index.html',
        controller: 'AreaCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });
