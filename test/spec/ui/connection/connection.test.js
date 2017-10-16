define([
    'src/core/app/appController',
    'src/app.bootstrap',
    'src/ui/connection/connection.component.tpl.html'
  ],
  function (ctrlName) {
    describe('ui.connection tests', function () {

      var $compile,
        $rootScope;

      // load the controller's module
      beforeEach(module('quartz.ui'));
      // declare ng-html2js's auto-generated partials module as a dependency
      beforeEach(module('templates'));


      // Store references to $rootScope and $compile
      // so they are available to all tests in this describe block
      beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
      }));


      it('Should have connection immediately', function () {

        var element = $compile('<qz-connections data="$ctrl.data"\n' +
          '                      tabs="$ctrl.tabs"\n' +
          '                      is-local-storage="true"></qz-connections>')($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        // Check that the compiled element contains the templated content
        var actual = element.html();
        expect(actual).toContain('<script type=\"text/ng-template\" id=\"nodes_renderer.html\">');

      });
    });
  });
