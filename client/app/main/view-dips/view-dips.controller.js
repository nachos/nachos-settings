'use strict';

angular.module('nachosSettingsApp')
  .controller('ViewDipsController', function ($scope, $timeout) {
    var nachosApi = require('nachos-api');
    var fs = require('fs');
    var async = require('async');
    var path = require('path');
    var _ = require('lodash');

    nachosApi.getAppConfig('nachos-settings', function (err, config) {
      if (err) {
        console.log(err);
      }
      else {
        var directory = config.dips;

        fs.readdir(directory, function (err, items) {
          async.map(items, function (item, cb) {
            var itemPath = path.join(directory, item);
            fs.stat(itemPath, function (err, stat) {
              if (err) {
                return cb(null, null);
              }

              return cb(null, {
                name: item,
                dir: directory,
                path: itemPath,
                isFolder: stat.isDirectory()
              })
            });
          }, function (err, results) {
            results = _.filter(results, function (item) {
              return item.isFolder;
            });

            $timeout(function () {
              $scope.dirs = results;
            });
          });
        });
      }
    });
  });