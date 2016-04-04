import Ember from 'ember';

export default Ember.Controller.extend({
  currentSession: Ember.inject.service(),

  actions: {
    create() {
      var _this = this;
      this.get('model').save().then(function() {
        _this.transitionToRoute('pallets.index');
      });
    }
  }
});

