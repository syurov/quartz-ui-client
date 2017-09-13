/*
 объявление пространства имен модуля main и его зависимостей.
 */
(function (ng) {
  var namespace = 'main';
  define([
      '../settings',

    ],
    function (settings) {

      return settings.createChild(namespace,
        []
      );


    });

})(window.angular);
