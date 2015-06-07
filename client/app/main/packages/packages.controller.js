'use strict';

angular.module('nachosSettingsApp')
  .controller('Packages', function ($scope, $timeout, $state) {
    var Packages = require('nachos-packages');
    var _ = require('lodash');

    var packages = new Packages();

    $scope.types = Packages.TYPES;

    $scope.view = function(item) {
      $state.go('shell.main.package-settings',{'item':item})
    };

    $scope.getItems = function (type) {
      return $scope[type];
    };

    packages.getAll(true, function (err, packages) {
      if (err) {
        throw new Error(err);
      }

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