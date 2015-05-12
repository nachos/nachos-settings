'use strict';

angular.module('nachosSettingsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shell.main.view', {
        url: '/view-dips',
        controller: 'ViewDipsController',
        templateUrl: 'app/main/view-dips/view-dips.html'
      });
  });
