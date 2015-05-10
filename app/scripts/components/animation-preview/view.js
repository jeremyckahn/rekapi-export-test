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
      animationChanged: function (animationData) {
        var rekapi = this.rekapi;
        _.each(rekapi.getAllActors(), rekapi.removeActor.bind(rekapi));

        // Stylie only exports single-actor animations currently, so just
        // associate the first actor in the imported animation to the DOM
        // element (actorEl) as a rendering context.
        rekapi.importTimeline(animationData);
        var actor = rekapi.getActor(rekapi.getActorIds()[0]);
        var actorEl = this.$actor[0];
        actor.context = actorEl;

        this.rekapi.update();
        this.emit('rekapiImportComplete', this.rekapi);
      }

      ,userRequestPlay: function () {
        this.rekapi.play();
      }

      ,userRequestPause: function () {
        this.rekapi.pause();
      }

      ,userRequestStop: function () {
        this.rekapi.stop();
        this.rekapi.update(0);
      }

      /**
       * @param {number} millisecond
       */
      ,userRequestSetPlayheadMillisecond: function (millisecond) {
        this.rekapi.update(millisecond);
      }
    }

    /**
     * @param {Object} [options] See http://backbonejs.org/#View-constructor
     */
    ,initialize: function () {
      baseProto.initialize.apply(this, arguments);

      // NOTE: Providing a DOM element as a rendering context to Rekapi sets up
      // the DOMRenderer automatically.
      this.rekapi = new Rekapi(this.$el[0]);

      this.rekapi.on('afterUpdate', function () {
        this.emit('rekapiHasUpdated', this.rekapi);
      }.bind(this));

      this.rekapi.on('playStateChange', function () {
        this.emit('rekapiPlayStateChange', this.rekapi.isPlaying());
      }.bind(this));
    }
  });

  return AnimationPreviewComponentView;
});
