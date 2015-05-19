'use strict';

angular.module('nachosSettingsApp')
  .controller('ViewSettingsController', function ($scope, $stateParams) {
    $scope.item = $stateParams.item;
  });

