define([

  'lateralus'

  ,'./model'
  ,'./view'
  ,'text!./template.mustache'

  ,'component.animation-input'
  ,'component.animation-preview'

], function (

  Lateralus

  ,Model
  ,View
  ,template

  ,AniamtionInputComponent
  ,AniamtionPreviewComponent

) {
  'use strict';

  var Base = Lateralus.Component;

  var ContainerComponent = Base.extend({
    name: 'container'
    ,Model: Model
    ,View: View
    ,template: template

    ,initialize: function () {
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
