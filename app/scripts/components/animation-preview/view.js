define([

  'lateralus'
  ,'rekapi'

  ,'text!./template.mustache'

], function (

  Lateralus
  ,Rekapi

  ,template

) {
  'use strict';

  var Base = Lateralus.Component.View;
  var baseProto = Base.prototype;

  var AnimationPreviewComponentView = Base.extend({
    template: template

    /**
     * @param {Object} [options] See http://backbonejs.org/#View-constructor
     */
    ,initialize: function () {
      baseProto.initialize.apply(this, arguments);
    }
  });

  return AnimationPreviewComponentView;
});
