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

  var AnimationPreviewComponent = Base.extend({
    name: 'animation-preview'
    ,Model: Model
    ,View: View
    ,template: template
  });

  return AnimationPreviewComponent;
});
