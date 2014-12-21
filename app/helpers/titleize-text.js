import Ember from 'ember';

export function titleizeText(input) {
  return input.underscore().replace(/_/g, " ").capitalize();
}

export default Ember.Handlebars.makeBoundHelper(titleizeText);
