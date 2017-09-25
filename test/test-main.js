'use strict';
var tests = [];


for (var file in window.__karma__.files) {

  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/test\.js$/.test(file)) {
      tests.push(file);
    }
  }

  // убираем ошибку ERROR: 'There is no timestamp for ...!'
  // смотри - [https://github.com/karma-runner/karma-requirejs/issues/6]
  window.__karma__.files[file.replace(/^\//, '')] = window.__karma__.files[file];
}


require.config({
    baseUrl: 'base',

    // ask Require.js to load these files (all our tests)
    deps: ['src/app.bootstrap'].concat(tests)

    // start test run, once Require.js is done
    //callback: window.__karma__.start
  }
);

require(tests, window.__karma__.start);
