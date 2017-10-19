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

        pause:function (trigger) {
          var that = this;
          this.quartzSrv.pause(trigger).$promise.then(function (result) {
            that.refresh();
          });
        },

        resume:function (trigger) {
          var that = this;
          this.quartzSrv.resume(trigger).$promise.then(function (result) {
            that.refresh();
          });
        },

        fire:function (trigger) {
          var that = this;
          this.quartzSrv.fire(trigger).$promise.then(function (result) {
            that.refresh();
          });
        },

      };

      module.component(depName, {
        controller: TriggerList,
        templateUrl: "ui/connection/schedules/trigger.list.component.tpl.html",
        bindings: {
          groupList: "<",
          quartzSrv: "<",
          refresh: "<",
        }
      });

      return depName;
    });

})(window.angular);
