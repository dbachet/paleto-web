import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var applicationController = this.controllerFor('application')
    return this.store.createRecord('pallet', { user: applicationController.get('currentUser')});
  }
});
