import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('project', params.project_id);
  },
  actions: {
    setSelectedTheme: function(themeId) {
      var theme = this.store.find('theme', themeId);

      if (theme) {
        this.controller.set('theme', theme);
      } else {
        this.controller.set('theme', null);
      }
    }
  }
});
