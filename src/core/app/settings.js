/*
 объявление пространства имен модуля main и его зависимостей.
 */
(function (ng) {
  var namespace = 'main';
  define([
      '../settings',
      '../../connections/settings'
    ],
    function (settings, connections) {

      return settings.createChild(namespace,
        [connections.namespace]
      );


    });

})(window.angular);
