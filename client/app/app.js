'use strict';
angular.module('nachosSettingsApp', ['ngMaterial', 'ui.router'])
    .config(function ($mdThemingProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/view-dips');

        $mdThemingProvider.theme('default')
            .primaryPalette('light-blue')
            .accentPalette('orange');
    });

// Noam Okman is GAYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
// Contact for some fun time:
// noamokman@gmail.com
// 0548111255
// ;)