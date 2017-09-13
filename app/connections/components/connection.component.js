/**
 @ngdoc overview
 @name Connection
 @description Component for connections
 */
(function (ng) {

  define([
      '../module',
      '../settings'
    ],
    function (module, settings) {
      'use strict'

      var depName = settings.dPrefix + Connections.name;

      Connections.$inject = ['$scope'];

      /**
       @ngdoc overview
       @name Connection
       @description Component for connections
       */
      function Connections($scope) {

        var json = window.localStorage.getItem("QuartzServerConnections");

        if (!json) {
          this.data = [{
            id: 1,
            title: 'project servers',
            type: 'group',
            nodes: [
              {
                id: 11,
                type: 'connection',
                title: 'scheduler1',
                url: ''
              },
              {
                id: 12,
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
          this.data.push({
            id: 1,
            title: 'project servers',
            type: 'group',
            nodes: []
          });

          this.saveDataToLocal();
        },

        newSubItem: function (scope) {
          var nodeData = scope.$modelValue;
          nodeData.nodes.push({
            id: nodeData.id * 10 + nodeData.nodes.length,
            title: nodeData.title + '.' + (nodeData.nodes.length + 1),
            nodes: []
          });

          this.saveDataToLocal();
        },
        remove: function (scope) {
          scope.remove();
          this.saveDataToLocal();
        },
        toggle: function (scope) {
          scope.toggle();
        }

      };

      module.component(depName, {
        controller: Connections,
        templateUrl: "connections/components/connection.component.tpl.html",
        bindings: {}
      });

      return depName;
    });

})(window.angular);
