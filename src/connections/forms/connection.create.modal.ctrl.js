/**
 *
 */
(function (ng, moment) {


  define([
      '../module',
      '../settings'
    ],
    function (module,
              settings) {

      'use strict';

      var depName = settings.getFullName(ConnectionModalController.name);

      /**
       @ngdoc  controller
       @name
       @description
       */
      ConnectionModalController.$inject = ["$modalInstance", "connection"];

      function ConnectionModalController($modalInstance, connection) {
        this.$modalInstance = $modalInstance;
        this.connection = connection;
      }

      ConnectionModalController.prototype = {

        ok: function ok() {
          var that = this;
          if (that.form.$invalid) {
            that.showValidation = true;
            return;
          }
          that.$modalInstance.close(that.connection);
        },
        cancel: function cancel() {
          this.$modalInstance.dismiss("close");
        }
      };

      module.controller(depName, ConnectionModalController);
      return depName;
    });

})(window.angular, window.moment);
