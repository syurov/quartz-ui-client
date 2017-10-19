/**
 @ngdoc overview
 @name Connection
 @description Component for connections
 */
(function (ng) {

  define([
      '../../module',
      '../../settings',
      './services/quartz.srv'
    ],
    function (module, settings, quartzSrvName) {
      'use strict'

      var depName = settings.dPrefix + Schedule.name;

      Schedule.$inject = ['$scope', '$timeout', quartzSrvName];

      /**
       @ngdoc overview
       @name Connection
       @description Component for connections
       */
      function Schedule($scope, $timeout, quartzSrvFactory) {

        this.$scope = $scope;
        this.$timeout = $timeout;
        this.quartzSrvFactory = quartzSrvFactory;

        this.watchers = [];

        this.timer = {};
        this.refreshTriggersGroup = this._refreshTriggersGroup.bind(this);
        this.connection.refreshTriggersGroup =this.refreshTriggersGroup;
        this.connection.pauseAll =this.pauseAll.bind(this);
        this.connection.resumeAll =this.resumeAll.bind(this);

      }

      Schedule.prototype = {
        $onInit: function $onInit() {
          var that = this;
          that.groupList = [];
          this.quartzSrv = this.quartzSrvFactory.create(this.connection.url);

          // var refreshByTimer = function () {
          //   var timeout = 2000;
          //   that.refreshTriggersGroup();
          //   that.timer = that.$timeout(refreshByTimer, timeout);
          // };

          //refreshByTimer();

          that.$scope.$on('$destroy', function () {
            for (var i = 0; i < that.watchers.length; i++) {
              that.watchers[i](0);
              that.watchers = null;
            }
            that.$timeout.cancel(that.timer);
          });

          this.refreshTriggersGroup();

        },

        _refreshTriggersGroup: function () {
          var that = this;
          that.quartzSrv.getTriggers().$promise.then(function (result) {
            that.groupList = result;
            that.refreshAllState(result);
          });
        },

        refreshAllState: function (groups) {
          var that = this;
          angular.forEach(groups, function (group) {

            angular.forEach(group.triggers, function (trigger) {
              that.quartzSrv.getState(trigger).$promise.then(function (result) {
                trigger.state = result.data;
              });
            })
          })
        },

        pauseAll:function () {
          var that = this;
          that.quartzSrv.pauseAll().$promise.then(function (result) {
            that.refreshTriggersGroup();
          });

        },

        resumeAll:function () {
          var that = this;
          that.quartzSrv.resumeAll().$promise.then(function (result) {
            that.refreshTriggersGroup();
          });

        }


      };

      module.component(depName, {
        controller: Schedule,
        templateUrl: "ui/connection/schedules/schedule.component.tpl.html",
        bindings: {
          connection: "<",
        }
      });

      return depName;
    });

})(window.angular);
