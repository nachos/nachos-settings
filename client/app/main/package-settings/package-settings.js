'use strict';

angular.module('nachosSettingsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shell.main.package-settings', {
        url: '/package-settings',
        params: { item: null },
        controller: 'PackageSettings',
        templateUrl: 'app/main/package-settings/package-settings.html'
      });
  });
