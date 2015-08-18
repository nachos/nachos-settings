'use strict';

angular.module('nachosSettingsApp', ['ngMaterial', 'ui.router', 'iframeWrapper'])
  .config(function ($mdThemingProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/packages');

    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('orange');
  })
  .run(function ($rootScope, $state, notify) {
    var packages = require('nachos-packages');

    if (process.argv.length) {
      var pkg = process.argv[0];

      packages.getPackage(pkg)
        .then(function (item) {
          $state.go('main.package-settings', {item: item});
        })
        .catch(function (err) {
          notify(err);
          $state.go('main.packages');
        })
    }
  });