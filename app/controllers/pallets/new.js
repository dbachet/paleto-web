import Ember from 'ember';

export default Ember.Controller.extend({
  currentSession: Ember.inject.service(),
  actions: {
    create() {
      this.get('model').save();
      this.transitionToRoute('pallets.index');
    }
  }
});

