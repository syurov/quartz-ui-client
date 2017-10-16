/**
 @ngdoc overview
 @name Connection
 @description Component for connections
 */
(function (ng) {

  define([
      '../module',
      '../settings',
      //'./services/modal.srv'
    ],
    function (module, settings, modalSrvName) {
      'use strict'

      var depName = settings.dPrefix + Schedule.name;

      Schedule.$inject = ['$scope'];

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
        templateUrl: "ui/schedules/schedule.component.tpl.html",
        bindings: {
          connection: "<",
        }
      });

      return depName;
    });

})(window.angular);
