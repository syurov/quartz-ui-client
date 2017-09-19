/*
 объявление пространства имен core
 */
(function (ng) {
  var namespace = 'core';
  define(['../settings'],
    function (settings) {

      return settings.createChild(namespace);

    });

})(window.angular);
