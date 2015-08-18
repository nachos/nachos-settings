'use strict';

angular.module('nachosSettingsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.nachos-settings', {
        url: '/nachos-settings',
        controller: 'nachosSettings',
        templateUrl: 'app/main/nachos-settings/nachos-settings.html'
      });
  });
