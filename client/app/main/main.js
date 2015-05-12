'use strict';

angular.module('nachosSettingsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shell.main', {
        abstract: true,
        templateUrl: 'app/main/main.html'
      });
  });
