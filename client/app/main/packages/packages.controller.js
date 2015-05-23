'use strict';

angular.module('nachosSettingsApp')
  .controller('Packages', function ($scope, $timeout, $state) {
    var nachosApi = require('nachos-api');
    var fs = require('fs');
    var async = require('async');
    var path = require('path');
    var _ = require('lodash');

    $scope.types = [
      'dips',
      'tacos'
    ];

    $scope.view = function(item) {
      $state.go('shell.main.package-settings',{'item':item})
    };

    nachosApi.config.get('nachos', function (err, config) {
      if (err) {
        throw new Error(err);
      }
      else {
        var packages = config.packages;

        var getPackages = function (type, cb) {
          var json = require(path.join(packages, type, 'index.json'));
          var items = Object.keys(json);
          async.map(items, function (item, itemCb) {
            nachosApi.config.dips.get(item, function (err, dipConfig) {
              var item = {
                name: dipConfig.config.name,
                path: dipConfig.path,
                config: dipConfig.config
              };
              itemCb(err, item);
            });
          }, cb);
        };

        $scope.getItems = function (type) {
          return $scope[type];
        };

        $scope.types.forEach(function (type) {
          getPackages(type, function (err, packages) {
            if (err) {
              throw new Error(err);
            }

            $timeout(function(){
              $scope[type] = packages;
            });
          });
        });
      }
    });
  });