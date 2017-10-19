/**
 * Service modal editing forms
 */
(function (ng) {

  define([
      '../../../module',
      '../../../settings'
    ],
    function (module,
              settings) {
      'use strict';

      var depName = settings.getFullName(QuartzService.name);

      QuartzService.$inject = ["$resource"];

      /**
       @ngdoc   service
       @name
       @description
       */
      function QuartzService($resource) {
        this.$resource = $resource;
      }

      QuartzService.prototype = {
        create: function (connection) {
          return this.$resource(connection,
            {},
            {
              getTriggers: {url: connection + 'triggers', method: 'GET',  isArray: true},
              getJobs: {url: connection + 'jobs', method: 'GET',  isArray: true},
              getState: {url: connection + 'triggersState', method: 'GET', transformResponse: function (data) {return {data: angular.fromJson(data)} }},
              pause: {url: connection + 'pause', method: 'GET'},
              resume: {url: connection + 'resume', method: 'GET'},
              fire: {url: connection + 'fire', method: 'GET'},
              resumeAll: {url: connection + 'resumeAll', method: 'GET'},
              pauseAll: {url: connection + 'pauseAll', method: 'GET'},

            });
        }
      };

      module.service(depName, QuartzService);

      return depName;
    });

})
(window.angular);
