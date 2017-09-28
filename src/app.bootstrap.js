/*
 Загрузчик приложения.
 Содержит ссылки на модули ядра приложения загружаемые при старте.
 */
(function (ng) {

  define(
    [
      './core/app/settings',
      './core/index',
      './ui/index'
    ],
    function (settings) {
      'use strict';
      ng.element(document).ready(function () {
        ng.bootstrap(document.body, [settings.namespace], {
          strictDi: true
        });
      });
    })
})(window.angular);
