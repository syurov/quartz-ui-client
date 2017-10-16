/**
 @ngdoc overview
 @name Connection
 @description Component for connections
 */
(function (ng) {

  define([
      '../module',
      '../settings',
      './services/quartz.srv'
    ],
    function (module, settings, quartzSrvName) {
      'use strict'

      var depName = settings.dPrefix + Schedule.name;

      Schedule.$inject = [quartzSrvName];

      /**
       @ngdoc overview
       @name Connection
       @description Component for connections
       */
      function Schedule(quartzSrv) {
        this.quartzSrv = quartzSrv;


      }

      Schedule.prototype = {
        $onInit: function $onInit() {
          this.srv = this.quartzSrv.create(this.connection.url);
          this.refresh();
        },

        refresh: function () {
          var that = this;
          this.triggers = this.srv.getTriggers().$promise.then(function (result) {
            that.triggers = result;
          });
        }


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
