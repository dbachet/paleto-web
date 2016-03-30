import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update() {
      var pallet = this.get('model');
      var _this = this;

      pallet.save().then(function() {
        _this.transitionToRoute('pallet', pallet);
      });
    }
  }
});
