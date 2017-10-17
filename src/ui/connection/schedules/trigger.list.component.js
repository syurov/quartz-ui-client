/**
 @ngdoc overview
 @name Connection
 @description Component for connections
 */
(function (ng) {

  define([
      '../../module',
      '../../settings',
    ],
    function (module, settings) {
      'use strict'

      var depName = settings.dPrefix + TriggerList.name;

      TriggerList.$inject = [];

      /**
       @ngdoc overview
       @name Connection
       @description Component for connections
       */
      function TriggerList() {


      }

      TriggerList.prototype = {
        $onInit: function $onInit() {
        },

      };

      module.component(depName, {
        controller: TriggerList,
        templateUrl: "ui/connection/schedules/trigger.list.component.tpl.html",
        bindings: {
          groupList: "<",
          quartzSrv: "<",
        }
      });

      return depName;
    });

})(window.angular);
