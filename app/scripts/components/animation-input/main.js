define([

  'lateralus'

  ,'./model'
  ,'./view'
  ,'text!./template.mustache'

], function (

  Lateralus

  ,Model
  ,View
  ,template

) {
  'use strict';

  var Base = Lateralus.Component;

  var AnimationInputComponent = Base.extend({
    name: 'animation-input'
    ,Model: Model
    ,View: View
    ,template: template
  });

  return AnimationInputComponent;
});
