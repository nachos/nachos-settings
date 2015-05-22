'use strict';
angular.module('nachosSettingsApp', ['ngMaterial', 'ui.router', 'iframeWrapper'])
    .config(function ($mdThemingProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/view-dips');

        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('orange');
    });