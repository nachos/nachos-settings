'use strict';

angular.module('nachosSettingsApp')
  .controller('Packages', function ($scope, $timeout, $state) {
    var packages = require('nachos-packages');
    var _ = require('lodash');

    $scope.types = packages.Packages.TYPES;

    $scope.view = function (item) {
      $state.go('shell.main.package-settings', {'item': item})
    };

    $scope.getItems = function (type) {
      return $scope[type];
    };

    packages.getAll(true)
      .then(function (packages) {
        $timeout(function () {
          var packageTypes = Object.keys(packages);
          packageTypes.forEach(function (type) {
            packages[type] = _.filter(packages[type], function (pkg) {
              return pkg.config.settings;
            });
          });

          _.merge($scope, packages);
        });
      });

  });