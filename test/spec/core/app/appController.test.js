define([
    'src/core/app/appController',
    'src/app.bootstrap'
  ],
  function (ctrlName) {
    describe('appController tests', function () {

      // load the controller's module
      beforeEach(module('quartz.core.main'));

      var MainCtrl,
        scope;

      // Initialize the controller and a mock scope
      beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller(ctrlName, {
          $scope: scope
          // place here mocked dependencies
        });
      }));

      it('data toBeDefined', function () {
        expect(MainCtrl.data).toBeDefined();
      });

      it('tabs toBeDefined', function () {
        expect(MainCtrl.tabs).toBeDefined();
      });
    });
  });
