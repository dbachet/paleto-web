import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('pallets', function() {
    this.route('new');
  });
  this.route('pallet', { path:'pallets/:pallet_id' }, function() {
    this.route('edit');
  });
});

export default Router;
