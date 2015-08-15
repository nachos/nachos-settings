'use strict';

angular.module('nachosSettingsApp')
  .service('notify', function ($mdToast) {
    return function (msg) {
      $mdToast.show(
        $mdToast.simple()
          .content(msg)
          .parent('.main')
          .position('bottom right')
      );
    }
  });