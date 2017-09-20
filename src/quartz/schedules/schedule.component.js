/**
 @ngdoc overview
 @name Connection
 @description Component for connections
 */
(function (ng) {

  define([
      '../module',
      '../settings',
      './services/modal.srv'
    ],
    function (module, settings, modalSrvName) {
      'use strict'

      var depName = settings.dPrefix + Schedule.name;

      Schedule.$inject = ['$scope', modalSrvName];

      /**
       @ngdoc overview
       @name Connection
       @description Component for connections
       */
      function Schedule($scope, modalSrv) {

        this.modalSrv = modalSrv;



      }

      Schedule.prototype = {
        $onInit: function $onInit() {

        },



      };

      module.component(depName, {
        controller: Schedule,
        templateUrl: "quartz/connection/connection.component.tpl.html",
        bindings: {
          data: "<",
          isLocalStorage: "<",
          tabs: "<",
        }
      });

      return depName;
    });

})(window.angular);
