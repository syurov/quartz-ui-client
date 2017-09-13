/*
 Define module angular
 */
(function (ng) {

  define(['./settings'],
    function (settings) {
      return settings.createModule();
    });

})(window.angular);
