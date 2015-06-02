'use strict';

angular.module('nachosSettingsApp')
  .controller('nachosSettings', function ($scope, $mdToast, $state) {
    var nachosApi = require('nachos-api');
    nachosApi.configs.getGlobal('nachos',function (err, config){
      $scope.config = config;
    });

    $scope.savePackages = function () {
      nachosApi.configs.saveGlobal('nachos', $scope.config, function (err) {
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