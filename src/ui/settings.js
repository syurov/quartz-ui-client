/**
 * Created by SYurov
 *
 * module connections
 */
(function (ng) {
  var namespace = 'ui';
  define([
      '../settings'
    ],
    function (settings) {
      var ret = settings.createChild(namespace);

      ret.deps = ['ui.tree', 'ui.bootstrap', 'ngResource'];
      return ret;
    });

})(window.angular);
