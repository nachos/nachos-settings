'use strict';

angular.module('nachosSettingsApp')
  .controller('PackageSettings', function ($scope, $stateParams, $state, notify) {
    var path = require('path');
    var nachosApi = require('nachos-api');
    var relative = require('require-relative');

    var api = {};
    var item = $stateParams.item;

    api.getSettings = function (cb) {
      nachosApi.settings(item.name).get(function (err, config) {
        cb(err, config);
      });
    };

    api.saveSettings = function (config, cb) {
      nachosApi.settings(item.name).save(config, function (err) {
        cb(err);
      })
    };

    item.content = {
      require: function (pkg) {
        return relative(pkg, item.path);
      },
      nachosApi: api
    };

    if (!item.config.settings) {
      notify(item.name + ' does not have settings');
      $state.go('main.packages');
    }

    item.settingsPath = path.join(item.path, item.config.settings);

    if (!item.settingsPath) {
      back();
    }

    $scope.item = item;
  });

