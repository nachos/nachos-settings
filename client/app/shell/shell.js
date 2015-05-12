'use strict';

angular.module('nachosSettingsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shell', {
        abstract: true,
        controller: 'ShellController',
        templateUrl: 'app/shell/shell.html'
      });
  });
