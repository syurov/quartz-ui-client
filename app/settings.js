/*
 корневое пространство имен.
 */
(function (ng) {


  var rootNs = 'jemys';
  var directivePrefix = 'jm';

  var namespace_separator = '.';

  function Settings(namespace, dPrefix) {
    this.namespace = namespace;

    this.dPrefix = dPrefix;
  }

  Settings.prototype = {

    extend: function (child, parent) {
      var F = function () {
      };
      F.prototype = parent.prototype;
      child.prototype = new F();
      child.prototype.constructor = child;
      child.superclass = parent;
    },

    createModule: function () {

      return ng.module(this.namespace, this.deps || []);
    },

    createChild: function (name, deps) {
      var ret = new Settings(this.getFullName(name), this.dPrefix);
      if (ng.isDefined(deps)) {
        if (ng.isArray(deps)) {
          ret.deps = deps;
        }
        else if (ng.isString(deps)) {
          ret.deps = [deps];
        }
      }
      return ret;
    },

    getFullName: function (name) {
      return [this.namespace, name].join(namespace_separator);
    },

    getDirectiveName: function (name) {

      return this.dPrefix + firstUpper(name);
    }

  };

  function firstUpper(str) {

    return str.replace(/(\D)(.+)/, function (a, f, s) {
      return f.toUpperCase() + s;
    });
  }

  define(function () {
    return new Settings(rootNs, directivePrefix);
  });

})(window.angular);