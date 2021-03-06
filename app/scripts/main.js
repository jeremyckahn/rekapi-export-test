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
    ,shifty: 'bower_components/shifty/dist/shifty'
    ,rekapi: 'bower_components/rekapi/dist/rekapi'
  }
  ,packages: [{
    name: 'lateralus'
    ,location: 'bower_components/lateralus/scripts'
    ,main: 'lateralus'
  }, {
    name: 'codemirror'
    ,location: 'bower_components/codemirror/lib'
    ,main: 'codemirror'
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
  }, {
    name: 'component.animation-preview'
    ,location: 'scripts/components/animation-preview'
  }, {
    name: 'component.timeline-scrubber'
    ,location: 'scripts/components/timeline-scrubber'
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
