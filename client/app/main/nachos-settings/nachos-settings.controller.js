'use strict';

angular.module('nachosSettingsApp')
  .controller('nachosSettings', function ($scope, $timeout, $state) {
    var nachosApi = require('nachos-api');
    nachosApi.config.get('nachos',function (err, config){
      $scope.user = config.user;
      $scope.packages = config.packages;
      $scope.defaults = config.defaults;
      console.log(config);
    });
  });