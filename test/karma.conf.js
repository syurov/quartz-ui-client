// Karma configuration
// Generated on 2017-09-20

module.exports = function (config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: ['jasmine', 'requirejs'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      //'bower_components/es5-shim/es5-shim.js',
      // 'bower_components/jquery/dist/jquery.js',
      // 'bower_components/moment/moment.js',
      'bower_components/angular/angular.js',
      //'bower_components/bootstrap/dist/js/bootstrap.js',
      // 'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-ui-tree/dist/angular-ui-tree.js',
      //'bower_components/angular-toastr/dist/angular-toastr.tpls.js',
      'bower_components/requirejs/require.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower

      'src/lib/*.js',


      // зависимости подключаемые через RequireJS

      //{pattern: 'bower_components/squire/src/Squire.js', included: false},
      //{pattern: 'bower_components/moment/min/moment-with-locales.js', included: false},
      //{pattern: 'tests/mock/**/*.js', included: false},

      {pattern: 'src/**/*.js', included: false},
      {pattern: 'src/**/*.html', included: false},
      {pattern: 'test/spec/**/*.js', included: false},
      'test/test-main.js'

    ],

    // list of files / patterns to exclude
    exclude: ['src/main.js'],

    // web server port
    port: 9052,

    // Tell karma to use ng-html2js
    preprocessors: {
      'src/**/*.html': ['ng-html2js']
    },

    // configure ng-html2js
    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      // create a single module that contains templates from all the files
      moduleName: 'templates'
    },

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins:
      [
        'karma-ng-html2js-preprocessor',
        'karma-phantomjs-launcher',
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-requirejs'
      ],

    // reporters: ['progress', 'coverage', 'html', 'verbose'],
    reporters:
      ['progress'],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun:
      false,

    colors:
      true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel:
    config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  })
  ;
};
