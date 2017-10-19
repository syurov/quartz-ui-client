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

      var depName = settings.dPrefix + JobList.name;

      JobList.$inject = [];

      /**
       @ngdoc overview
       @name Connection
       @description Component for connections
       */
      function JobList() {


      }

      JobList.prototype = {
        $onInit: function $onInit() {
        },


      };

      module.component(depName, {
        controller: JobList,
        templateUrl: "ui/connection/schedules/job.list.component.tpl.html",
        bindings: {
          groupList: "<",
          quartzSrv: "<",
          refresh: "<",
        }
      });

      return depName;
    });

})(window.angular);
