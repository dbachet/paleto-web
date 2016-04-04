import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentSession: Ember.inject.service(),
  model: function() {
    return this.store.createRecord('pallet', { user: this.get('currentSession.user') });
  }
});
