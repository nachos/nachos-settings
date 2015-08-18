'use strict';

angular.module('nachosSettingsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        abstract: true,
        templateUrl: 'app/main/main.html'
      });
  });
