'use strict';

angular.module('nachosSettingsApp')
  .controller('ViewSettingsController', function ($scope, $stateParams) {
   var path = require('path');

    var settingPath = path.join($stateParams.path, 'dip.json');

    var settings = require(settingPath);
    $scope.settings = [];

    for (var prop in settings) {
      $scope.settings.push({name: prop, value: settings[prop]});
    }
  });

