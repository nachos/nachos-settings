'use strict';

angular.module('nachosSettingsApp')
  .controller('PackageSettings', function ($scope, $state, $stateParams, item) {
    var path = require('path');

    var nachosApi = require('nachos-api');
    var api = {};
    api.getSettings = function(cb) {
      nachosApi.settings(item.name).get(function(err, config){
        cb(err, config);
      });
    };

    api.saveSettings = function (config, cb) {
      nachosApi.settings(item.name).save(config, function (err) {
        cb(err);
      })
    };

    var relative = require('require-relative');

    item.content = {
      require: function (pkg) {
        return relative(pkg, item.path);
      },
      nachosApi: api
    };

    item.settingsPath = path.join(item.path, item.config.settings);

    if(!item.settingsPath){
      back();
    }

    $scope.item = item;
  });

