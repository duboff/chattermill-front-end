import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('company');
  },
  actions: {
    createCompany: function() {
      this.currentModel.save().then(function(model) {
        this.transitionTo('company', model);
      });
    }
  }
});
