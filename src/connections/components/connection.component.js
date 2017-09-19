/**
 @ngdoc overview
 @name Connection
 @description Component for connections
 */
(function (ng) {

  define([
      '../module',
      '../settings',
      '../services/modal.srv'
    ],
    function (module, settings, modalSrvName) {
      'use strict'

      var depName = settings.dPrefix + Connections.name;

      Connections.$inject = ['$scope', modalSrvName];

      /**
       @ngdoc overview
       @name Connection
       @description Component for connections
       */
      function Connections($scope, modalSrv) {

        this.modalSrv = modalSrv;

        var json = window.localStorage.getItem("QuartzServerConnections");

        if (!json) {
          this.data = [{
            title: 'project servers',
            type: 'group',
            nodes: [
              {
                type: 'connection',
                title: 'scheduler1',
                url: ''
              },
              {
                type: 'connection',
                title: 'scheduler2',
                url: ''
              }
            ]
          }];

          this.saveDataToLocal();
        } else {
          this.data = angular.fromJson(json);
        }

      }

      Connections.prototype = {
        $onInit: function $onInit() {

        },

        saveDataToLocal: function () {
          var json = angular.toJson(this.data);

          window.localStorage.setItem("QuartzServerConnections", json);
        },

        addGroup: function () {

          var group = {
            title: 'new group',
            type: 'group',
            nodes: []
          };

          this.editGroup(group).then(() => {
            this.data.push(group);
            this.saveDataToLocal();
          });
        },

        newConnection: function (scope) {
          var nodeData = scope.$modelValue;

          var connection = {
            title: "",
            type: "connection"
          };

          this.editConnection(connection).then(
            () => {
              nodeData.nodes.push(connection);
              this.saveDataToLocal();
            }
          );


        },

        editConnection: function (connection) {
          var c = angular.copy(connection);
          var dialog = this.modalSrv.showCreateConnectionDialog(c);

          dialog.then(
            () => {
              angular.extend(connection, c);
              this.saveDataToLocal();
            }
          );

          return dialog;
        },

        editGroup: function (group) {
          var g = angular.copy(group);
          var dialog = this.modalSrv.showCreateGroupDialog(g);

          dialog.then(
            () => {
              angular.extend(group, g);
              this.saveDataToLocal();
            }
          );

          return dialog;
        }
        ,

        edit: function (scope) {
          var nodeData = scope.$modelValue;
          if (nodeData.type === 'group') {
            this.editGroup(nodeData);
          } else if (this.isConnection(nodeData)) {
            this.editConnection(nodeData);
          }
        }
        ,
        remove: function (scope) {
          scope.remove();
          this.saveDataToLocal();
        }
        ,
        toggle: function (scope) {
          scope.toggle();
        },

        isConnection: function (node) {
          return node.type === 'connection';
        },


      };

      module.component(depName, {
        controller: Connections,
        templateUrl: "connections/components/connection.component.tpl.html",
        bindings: {}
      });

      return depName;
    });

})(window.angular);
