'use strict';

angular.module('nachosSettingsApp')
  .config(function ($stateProvider) {
    var packages = require('nachos-packages');

    $stateProvider
      .state('shell.main.package-settings', {
        url: '/package-settings/:package',
        params: { item: null },
        controller: 'PackageSettings',
        templateUrl: 'app/main/package-settings/package-settings.html',
        resolve: {
          item: function ($stateParams) {
            return $stateParams.item || packages.getPackage($stateParams.package);
          }
        }
      });
  });
