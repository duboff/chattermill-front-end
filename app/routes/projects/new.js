import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('project');
  },
  actions: {
    createProject: function() {
      var company = this.modelFor('company');
      this.currentModel.set('company', company);
      this.currentModel.save().then(function(model) {
        this.transitionTo('project', model);
      });
    }
  }
});