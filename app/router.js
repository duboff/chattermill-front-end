import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('welcome', {path: '/'});
  this.route('about', {path: '/about'});

  this.resource('user', { path: '/:user_id'});
  this.resource('companies', function() {
    this.resource('company', { path: '/:company_id' }, function() {
      this.resource('subscription', function() {
        this.route('new');
        this.route('edit');
      });
      this.route('dashboard');
    });
  });
  this.resource('projects', function() {
    this.route('new');
    this.resource('project', {path: '/project_id'}, function() {
      this.resource('themes');
    });
  });
});

export default Router;