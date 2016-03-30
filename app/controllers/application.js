import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentUser: null,

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
