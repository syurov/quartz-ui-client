/**
 * Service modal editing forms
 */
(function (ng) {

  define([
      '../../module',
      '../../settings',
      './forms/group.create.modal.ctrl',
      './forms/connection.create.modal.ctrl',
    ],
    function (module,
              settings,
              modalGroupCreateCtrlName,
              modalConnectionCreateCtrlName) {
      'use strict';

      var depName = settings.getFullName(ModalService.name);

      ModalService.$inject = ["$modal"];

      /**
       @ngdoc   service
       @name
       @description
       */
      function ModalService($modal) {
        this.$modal = $modal;
      }

      ModalService.prototype = {
        showCreateGroupDialog: function (group) {
          var modalInstance = this.$modal.open({
            templateUrl: "ui/connection/services/forms/group.create.modal.tpl.html",
            controller: modalGroupCreateCtrlName,
            controllerAs: '$ctrl',
            size: 'sm',
            animation: true,
            backdrop: false,
            resolve: {
              group: function () {
                return group;
              }
            }
          });
          modalInstance.opened.then(function (res) {
            },
            function (rej) {
            });

          return modalInstance.result;
        },
        showCreateConnectionDialog: function (connection) {
          var modalInstance = this.$modal.open({
            templateUrl: "ui/connection/services/forms/connection.create.modal.tpl.html",
            controller: modalConnectionCreateCtrlName,
            controllerAs: '$ctrl',
            size: 'sm',
            animation: true,
            backdrop: false,
            resolve: {
              connection: function () {
                return connection;
              }
            }
          });
          modalInstance.opened.then(function (res) {
            },
            function (rej) {
            });

          return modalInstance.result;
        }
      };

      module.service(depName, ModalService);

      return depName;
    });

})
(window.angular);
