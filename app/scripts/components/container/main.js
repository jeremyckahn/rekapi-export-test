define([

  'lateralus'

  ,'./model'
  ,'./view'
  ,'text!./template.mustache'

  ,'component.animation-input'

], function (

  Lateralus

  ,Model
  ,View
  ,template

  ,AniamtionInputComponent

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
    }
  });

  return ContainerComponent;
});
