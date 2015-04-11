/*global require*/
'use strict';

require.config({
  baseUrl: '/'
  ,shim: {
    bootstrap: {
      deps: ['jquery']
      ,exports: 'jquery'
    }
  }
  ,paths: {
    text: 'bower_components/requirejs-text/text'
    ,jquery: 'bower_components/jquery/dist/jquery'
    ,backbone: 'bower_components/backbone/backbone'
    ,underscore: 'bower_components/lodash/dist/lodash'
    ,mustache: 'bower_components/mustache/mustache'
  }
  ,packages: [{
    name: 'lateralus'
    ,location: 'bower_components/lateralus/scripts'
    ,main: 'lateralus'
  }, {
    name: 'rekapi-export-test'
    ,location: 'scripts'
    ,main: 'rekapi-export-test'
  }, {
    name: 'rekapi-export-test.component.container'
    ,location: 'scripts/components/container'
  }, {
    name: 'component.animation-input'
    ,location: 'scripts/components/animation-input'
  }]
});

require([

  'rekapi-export-test'

], function (

  RekapiExportTest

) {
  window.rekapiExportTest =
    new RekapiExportTest(document.getElementById('rekapi-export-test'));
});
