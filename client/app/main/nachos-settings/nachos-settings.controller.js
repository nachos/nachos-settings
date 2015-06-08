'use strict';

angular.module('nachosSettingsApp')
  .controller('nachosSettings', function ($scope, $mdToast) {
    var nachosConfig = require('nachos-config')();

    nachosConfig.get(function (err, config){
      $scope.config = config;
    });

    $scope.savePackages = function () {
      nachosSettings.save($scope.config, function (err) {
        if(err) {
          return notify(err);
        }

        notify('Changes saved')
      });
    };

    function notify (msg) {
      $mdToast.show(
        $mdToast.simple()
          .content(msg)
          .parent('.files')
          .position('bottom right')
      );
    }
  });