define([

  'lateralus'

  ,'text!./template.mustache'

], function (

  Lateralus

  ,template

) {
  'use strict';

  var Base = Lateralus.Component.View;
  var baseProto = Base.prototype;

  var AnimationInputComponentView = Base.extend({
    template: template

    ,events: {
      'change textarea': function () {
        var textareaVal = this.$textarea.val();
        var animationData;

        try {
          animationData = JSON.parse(textareaVal);
        } catch (e) {
          this.lateralus.error(e);
          return;
        }

        this.emit('inputUpdated', animationData);
      }
    }

    /**
     * @param {Object} [options] See http://backbonejs.org/#View-constructor
     */
    ,initialize: function () {
      baseProto.initialize.apply(this, arguments);
    }
  });

  return AnimationInputComponentView;
});
