/*
 объявление контроллера
 */
'use strict';

(function (ng, undefined) {
  var name = 'appController';


  define(
    [
      './module',
    ],

    function (module) {
      var depName = [module.name, name].join('.');
      module.controller(depName,
        [
          '$window',
          '$rootScope',
          '$scope',
          '$q',
          function ($window,
                    $rootScope,
                    $scope,
                    $q) {

            var watchers = [];

            $scope.data = [];
            $scope.tabs = [];

            //destructor
            $scope.$on("$destroy", function () {
              //remove watchers, observers and listeners
              for (var i = 0; i < watchers.length; i++) {
                watchers[i]();
              }
            });

          }]);
    });

})(window.angular);
