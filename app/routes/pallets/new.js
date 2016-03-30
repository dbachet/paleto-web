import Ember from 'ember';

export default Ember.Route.extend({
  currentSession: Ember.inject.service(),
  model: function() {
    return this.store.createRecord('pallet', { user: this.get('currentSession.user')});
  }
});
