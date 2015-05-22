'use strict';

angular.module('nachosSettingsApp')
  .controller('ViewSettingsController', function ($scope, $state, $stateParams, $timeout) {
    if(!$stateParams.item){
      $state.go('shell.main.view');
    }

    var path = require('path');
    var item = $stateParams.item;

    var nachosApi = require('nachos-api');
    var api = {};
    api.getSettings = function(cb) {
      nachosApi.config.get(item.name, function(err, config){
        cb(err, config);
      });
    };

    api.saveSettings = function (config) {
      //nachosApi.config
    };

    item.content = {
      require: require('relative-require')(item.path),
      nachosApi: api
    };

    item.settingsPath = path.join(item.path, item.config.settings);
// Try

    $scope.item = item;
    console.log($scope.item);
  });

