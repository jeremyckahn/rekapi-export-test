define([

  'underscore'
  ,'lateralus'
  ,'rekapi'

  ,'text!./template.mustache'

], function (

  _
  ,Lateralus
  ,Rekapi

  ,template

) {
  'use strict';

  var Base = Lateralus.Component.View;
  var baseProto = Base.prototype;

  var AnimationPreviewComponentView = Base.extend({
    template: template

    ,lateralusEvents: {
      /**
       * @param {Object} animationData
       */
      inputUpdated: function (animationData) {
        var rekapi = this.rekapi;
        _.each(rekapi.getAllActors(), rekapi.removeActor.bind(rekapi));
        this.rekapi.importTimeline(animationData);

        _.each(rekapi.getAllActors(), function (actor) {
          actor.context = this.$actor[0];
        }.bind(this));
      }
    }

    /**
     * @param {Object} [options] See http://backbonejs.org/#View-constructor
     */
    ,initialize: function () {
      baseProto.initialize.apply(this, arguments);
      this.rekapi = new Rekapi(this.$el[0]);
      this.rekapi.play();
    }
  });

  return AnimationPreviewComponentView;
});
