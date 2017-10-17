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

            });
        }
      };

      module.service(depName, QuartzService);

      return depName;
    });

})
(window.angular);
