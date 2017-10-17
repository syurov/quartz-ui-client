/**
 @ngdoc overview
 @name Connection
 @description Component for connections
 */
(function (ng) {

  define([
      '../module',
      '../settings',
      './services/modal.srv'
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

        this.isCollapse = false;
        this.modalSrv = modalSrv;

        if (this.isLocalStorage) {

          var json = window.localStorage.getItem("QuartzServerConnections");

          if (!json) {
            // this.data = [{
            //   title: 'project servers',
            //   type: 'group',
            //   nodes: [
            //     {
            //       type: 'connection',
            //       title: 'scheduler1',
            //       url: ''
            //     },
            //     {
            //       type: 'connection',
            //       title: 'scheduler2',
            //       url: ''
            //     }
            //   ]
            // }];

            this.saveDataToLocal();
          } else {
            if (json != "undefined") {
              var data = angular.fromJson(json);
              this.data.length = 0;
              angular.extend(this.data, data);
            }
          }
        }

      }

      Connections.prototype = {
        $onInit: function $onInit() {

        },

        saveDataToLocal: function () {
          if (this.isLocalStorage) {
            var json = angular.toJson(this.data);
            window.localStorage.setItem("QuartzServerConnections", json);
          }
        },

        addGroup: function () {

          var group = {
            title: 'new group',
            type: 'group',
            nodes: []
          };

          this.editGroup(group).then(function () {
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
            function () {
              nodeData.nodes.push(connection);
              this.saveDataToLocal();
            }
          );


        },

        editConnection: function (connection) {
          var that = this;
          var c = angular.copy(connection);
          var dialog = this.modalSrv.showCreateConnectionDialog(c);

          dialog.then(
            function () {
              angular.extend(connection, c);
              that.saveDataToLocal();
            }
          );

          return dialog;
        },

        editGroup: function (group) {
          var g = angular.copy(group);
          var dialog = this.modalSrv.showCreateGroupDialog(g);

          dialog.then(
            function () {
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
        },

        open: function (scope) {
          var nodeData = scope.$modelValue;
          if (this.isConnection(nodeData)) {
            if (!nodeData.isOpen) {
              nodeData.isOpen = true;
              if (this.tabs.indexOf(nodeData) < 0)
                this.tabs.push(nodeData);
            } else {
              nodeData.isOpen = false;
              var indexOf = this.tabs.indexOf(nodeData);
              if (indexOf >= 0)
                this.tabs.splice(indexOf, 1);
            }
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
        templateUrl: "ui/connection/connection.component.tpl.html",
        bindings: {
          data: "<",
          isLocalStorage: "<",
          tabs: "<",
        }
      });

      return depName;
    });

})(window.angular);
