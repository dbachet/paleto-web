import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentSession: Ember.inject.service(),
  currentUser: Ember.computed.alias('currentSession.user'),
  isLoggedIn: Ember.computed.alias('currentSession.isLoggedIn'),
  isLoggedInAsAdmin: Ember.computed.and('isLoggedIn', 'currentUser.isAdmin'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
