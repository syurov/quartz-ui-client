/*
 Объявление модуля ангулар -основного модуля приложения
 */
(function (ng, undefined) {

  define(['./settings'],
    function (settings) {

      return settings.createModule();
    });

})(window.angular);