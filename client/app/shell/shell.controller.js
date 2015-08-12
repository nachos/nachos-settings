'use strict';

angular.module('nachosSettingsApp')
  .controller('ShellController', ['$scope', function ($scope, $window) {
    //var ngui = require('nw.gui');
    //var nwin = ngui.Window.get();
    var remote = require('remote');
    var window = remote.getCurrentWindow();

    $scope.isFullScreen = false;

    $scope.close = function () {
      window.close();
    };

    $scope.toggleFullscreen = function (){
      if(!$scope.isFullScreen){
        window.maximize();
      }
      else{
        window.unmaximize();
      }
      $scope.isFullScreen = !$scope.isFullScreen;
    };

    $scope.hide = function (){
      window.minimize()
    };
  }]);