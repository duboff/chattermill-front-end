import Ember from 'ember';

export default Ember.Component.extend({
  type: function() {
    if (this.get('for').match(/password/)) {
      return "password";
    } else if (this.get('for').match(/email/)) {
      return "email";
    } else {
      return "text";
    }
  }.property('for'),
  
  label: function() {
    return this.get('for');
  }.property('for'),

  fieldId: function() {
    return "" + (Ember.guidFor(this.get('object'))) + "-input-" + (this.get('for'));
  }.property('object', 'for'),
  
  isTextArea: Ember.computed.equal('type', 'textarea'),
  
  object: Ember.computed.alias('parentView.for'),
  
  setupBindings: function() {
    this.binding = Ember.Binding.from("object." + (this.get('for'))).to('value');
    return this.binding.connect(this);
  }.on('init').observes('for', 'object')
});
