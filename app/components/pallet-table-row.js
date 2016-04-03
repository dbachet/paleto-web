import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  pallet: null,
  applicationController: null,
  currentSession: Ember.inject.service(),
  currentUser: Ember.computed.alias('currentSession.user'),
  isLoggedIn: Ember.computed.alias('currentSession.isLoggedIn'),
  isLoggedInAsAdmin: Ember.computed.alias('applicationController.isLoggedInAsAdmin'),

  hasCurrentUserCreatedPallet: function() {
    return Ember.isEqual(this.get('currentUser.id'), this.get('pallet.user.id'));
  }.property('currentUser', 'pallet.user'),

  canEditAndDelete: Ember.computed.or('isLoggedInAsAdmin', 'hasCurrentUserCreatedPallet')
});
