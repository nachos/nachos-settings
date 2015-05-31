'use strict';

angular.module('nachosSettingsApp')
  .controller('Packages', function ($scope, $timeout, $state) {
    var nachosApi = require('nachos-api');
    var path = require('path');
    var _ = require('lodash');

    $scope.types = nachosApi.packages.types;

    $scope.view = function(item) {
      $state.go('shell.main.package-settings',{'item':item})
    };

    $scope.getItems = function (type) {
      return $scope[type];
    };

    nachosApi.packages.getAll(true, function (err, packages) {
      if (err) {
        throw new Error(err);
      }

      $timeout(function () {
        _.merge($scope, packages);
      });
    });

  });