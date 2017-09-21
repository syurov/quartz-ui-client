define([
    'src/core/app/settings',
    'src/settings'],
  function (settings, root) {
    describe('module app tests', function () {

      var ns = 'quartz.core.main';

      it('root defined', function () {
        expect(root).toBeDefined();
        expect(root.namespace).toEqual('quartz');
        expect(root.getFullName).toBeDefined();
        expect(angular.isFunction(root.getFullName)).toEqual(true);

      });

      it('создается имя с нэймспейсом', function () {
        expect(settings.getFullName).toBeDefined();
        expect(window.angular.isFunction(settings.getFullName)).toEqual(true);
        expect(settings.getFullName('name')).toEqual(ns + '.name');

      });

      it('module created', function () {

        var module = settings.createModule();
        expect(module).toBeDefined();
        expect(module.name).toBeDefined();
        expect(module.name).toEqual(ns);
      });
    });
  });
