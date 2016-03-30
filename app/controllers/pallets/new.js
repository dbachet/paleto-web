import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  actions: {
    create() {
      console.log(this.get('model.title'));
      var _this = this;
      this.store.createRecord('pallet', {
        title: 'wedwed',
        description: 'wedwed',
        longitude: '11',
        latitude: '12',
        user: _this.get('currentUser')
      }).save();
      //this.get('model').save();
    }
  }
});

