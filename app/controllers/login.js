import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  errors: [],

  actions: {
    authenticate() {
      const { identification, password } = this.getProperties('identification', 'password');

      this.get('session').authenticate('authenticator:devise', identification, password).then(() => {
        this.transitionToRoute('index');
      }, (err) => {
        console.log(err);
        this.set('errors', err.error);
      });
    }
  }
});
