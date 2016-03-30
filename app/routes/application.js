import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var user_id = this.controllerFor('application').get('session').get('data').authenticated.id;
    var _this = this;

    this.store.findRecord('user', user_id).then(function(_user) {
      _this.controllerFor('application').set('currentUser', _user);
    });
  }
});
