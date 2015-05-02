define([

  'lateralus'

  ,'./model'
  ,'./view'
  ,'text!./template.mustache'

  ,'component.animation-input'
  ,'component.animation-preview'
  ,'component.timeline-scrubber'

], function (

  Lateralus

  ,Model
  ,View
  ,template

  ,AniamtionInputComponent
  ,AniamtionPreviewComponent
  ,TimelineScrubberComponent

) {
  'use strict';

  var Base = Lateralus.Component;

  var ContainerComponent = Base.extend({
    name: 'container'
    ,Model: Model
    ,View: View
    ,template: template

    ,initialize: function () {
      this.timelineScrubberComponent = this.addComponent(
        TimelineScrubberComponent, {
          el: this.view.$timelineScrubber[0]
        });

      this.animationInputComponent = this.addComponent(
        AniamtionInputComponent, {
          el: this.view.$animationInput[0]
        });

      this.animationPreviewComponent = this.addComponent(
        AniamtionPreviewComponent, {
          el: this.view.$animationPreview[0]
        });
    }
  });

  return ContainerComponent;
});
