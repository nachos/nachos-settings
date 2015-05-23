'use strict';

angular.module('nachosSettingsApp')
  .controller('PackageSettings', function ($scope, $state, $stateParams) {
    function back (){
      $state.go('shell.main.packages');
    }

    if(!$stateParams.item){
      back()
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

    api.saveSettings = function (config, cb) {
      nachosApi.config.save(item.name, config, function (err) {
        cb(err);
      })
    };

    item.content = {
      require: require('relative-require')(item.path),
      nachosApi: api
    };

    item.settingsPath = path.join(item.path, item.config.settings);

    if(!item.settingsPath){
      back();
    }

    $scope.item = item;
    console.log($scope.item);
  });

