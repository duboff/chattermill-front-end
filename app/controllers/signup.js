import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',

  actions: {
    createUser: function() {
      var _this = this;

      this.get('model').save().then(function(model) {

        var credentials = {
          identification: model.get('email'), 
          password: model.get('password')
        };
        
        _this.get('session').authenticate('simple-auth-authenticator:devise', credentials);

      });
    }
  }
});