'use strict';

angular.module('nachosSettingsApp')
  .controller('nachosSettings', function ($scope, notify) {
    var nachosConfig = require('nachos-config');

    nachosConfig.get()
      .then(function (config) {
        $scope.config = config;
      });

    $scope.saveSettings = function () {
      nachosConfig.save($scope.config)
        .then(function () {
          notify('Changes saved')
        })
        .catch(function (err) {
          return notify(err);
        });
    };

  });