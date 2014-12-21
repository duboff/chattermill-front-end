import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: "Submit",
  actions: {
    submit: function () {
      this.sendAction();
    }
  }
});
