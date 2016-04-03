import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),

  filteredPallets: Ember.computed.filterBy('model', 'isNew', false)
});
