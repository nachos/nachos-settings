'use strict';

angular.module('nachosSettingsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shell.main.view-settings', {
        url: '/view-settings?path',
        controller: 'ViewSettingsController',
        templateUrl: 'app/main/view-settings/view-settings.html'
      });
  });
