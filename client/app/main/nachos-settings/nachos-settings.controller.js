'use strict';

angular.module('nachosSettingsApp')
  .controller('nachosSettings', function ($scope, $mdToast) {
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

    function notify(msg) {
      $mdToast.show(
        $mdToast.simple()
          .content(msg)
          .parent('.files')
          .position('bottom right')
      );
    }
  });