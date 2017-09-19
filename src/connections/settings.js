/**
 * Created by SYurov
 *
 * module connections
 */
(function (ng) {
  var namespace = 'connections';
  define([
      '../settings'
    ],
    function (settings) {
      var ret = settings.createChild(namespace);

      ret.deps = ['ui.tree', 'ui.bootstrap'];
      return ret;
    });

})(window.angular);
