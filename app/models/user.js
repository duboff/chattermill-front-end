import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr("string"),
  passwordConfirmation: DS.attr("string"),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),
  company: DS.belongsTo('company', { async: true })
});
