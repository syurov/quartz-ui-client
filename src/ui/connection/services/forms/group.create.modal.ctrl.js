/**
 *
 */
(function (ng, moment) {


  define([
      '../../../module',
      '../../../settings'
    ],
    function (module,
              settings) {

      'use strict';

      var depName = settings.getFullName(GroupModalController.name);

      /**
       @ngdoc   controller
       @name
       @description
       */
      GroupModalController.$inject = ["$modalInstance", "group"];

      function GroupModalController($modalInstance, group) {
        this.$modalInstance = $modalInstance;
        this.group = group;
      }

      GroupModalController.prototype = {

        ok: function ok() {
          var that = this;
          if (that.form.$invalid) {
            that.showValidation = true;
            return;
          }
          that.$modalInstance.close(that.group);
        },
        cancel: function cancel() {
          this.$modalInstance.dismiss("close");
        }
      };

      module.controller(depName, GroupModalController);
      return depName;
    });

})(window.angular, window.moment);
