'use strict';

angular.module('nachosSettingsApp')
  .config(function ($stateProvider) {
    var packages = require('nachos-packages');

    $stateProvider
      .state('main.package-settings', {
        url: '/package-settings',
        params: {item: null},
        controller: 'PackageSettings',
        templateUrl: 'app/main/package-settings/package-settings.html'
      });
  });
