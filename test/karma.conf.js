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
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/angular/angular.js',
      'bower_components/angular-i18n/angular-locale_ru-ru.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-mask/dist/ngMask.js',
      'bower_components/angular-ui-tree/dist/angular-ui-tree.js',
      'bower_components/tinymce/tinymce.js',
      'bower_components/tinymce/plugins/table/plugin.js',
      'bower_components/tinymce/plugins/paste/plugin.js',
      'bower_components/tinymce/plugins/lists/plugin.js',
      'bower_components/tinymce/plugins/textcolor/plugin.js',
      'bower_components/tinymce/themes/modern/theme.js',
      'bower_components/tinymce-i18n/langs/ru.js',
      'bower_components/angular-ui-tinymce/src/tinymce.js',
      'bower_components/angular-guid/guid.js',
      'bower_components/angular-toastr/dist/angular-toastr.tpls.js',
      'bower_components/angular-file-model/angular-file-model.js',
      'bower_components/spin.js/spin.js',
      'bower_components/ng-stats/dist/ng-stats.js',
      'bower_components/flow.js/dist/flow.js',
      'bower_components/ng-flow/dist/ng-flow.js',
      'bower_components/requirejs/require.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-scenario/angular-scenario.js',
      // endbower
      //{pattern: 'bower_components/spin.js/spin.js', included: false},
      //{pattern: 'bower_components/angular-spinner/angular-spinner.js', included:false},

      {pattern: 'src/lib/*.js', included: true},


      // зависимости подключаемые через RequireJS

      {pattern: 'bower_components/squire/src/Squire.js', included: false},
      //{pattern: 'bower_components/moment/min/moment-with-locales.js', included: false},
      // 'src/**/*.js',
      //{pattern: 'tests/mock/**/*.js', included: false},
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'test/spec/**/*.js', included: false},
      'test/test-main.js'

    ],

    // list of files / patterns to exclude
    exclude: ['src/main.js'],

    // web server port
    port: 9052,



    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'Chrome'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

   // reporters: ['progress', 'coverage', 'html', 'verbose'],
    reporters: ['progress'],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
