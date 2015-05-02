define([

  'lateralus'
  ,'bower_components/codemirror/lib/codemirror'

  ,'text!./template.mustache'

  // CodeMirror mode and theme files do not return anything
  ,'bower_components/codemirror/mode/javascript/javascript'

], function (

  Lateralus
  ,CodeMirror

  ,template

) {
  'use strict';

  var Base = Lateralus.Component.View;
  var baseProto = Base.prototype;

  var AnimationInputComponentView = Base.extend({
    template: template

    /**
     * @param {Object} [options] See http://backbonejs.org/#View-constructor
     */
    ,initialize: function () {
      baseProto.initialize.apply(this, arguments);
    }

    ,deferredInitialize: function () {
      this.codeMirror = CodeMirror.fromTextArea(this.$textarea[0], {
        lineNumbers: true
        ,lineWrapping: true
        ,mode: 'javascript'
        ,theme: 'mbo'
      });

      this.codeMirror.on('changes', this.onCodeMirrorChanges.bind(this));
    }

    ,onCodeMirrorChanges: function () {
      var inputVal = this.codeMirror.getValue();
      var animationData;

      try {
        animationData = JSON.parse(inputVal);
      } catch (e) {
        this.lateralus.error(e);
        return;
      }

      this.emit('animationChanged', animationData);
    }
  });

  return AnimationInputComponentView;
});
