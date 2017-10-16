/**
 @ngdoc overview
 @name Connection
 @description Component for tabs
 */
(function (ng) {

  define([
      '../module',
      '../settings'
    ],
    function (module, settings) {
      'use strict'

      var depName = settings.dPrefix + Tabs.name;

      Tabs.$inject = ['$scope'];

      /**
       @ngdoc overview
       @name Connection
       @description Component for connections
       */
      function Tabs($scope, modalSrv) {


      }

      Tabs.prototype = {
        $onInit: function $onInit() {

        },


      };

      module.component(depName, {
        controller: Tabs,
        templateUrl: "ui/tab/tabs.component.tpl.html",
        bindings: {
          tabs: "<",
          active: "<"
        }
      });

      return depName;
    });

})(window.angular);
