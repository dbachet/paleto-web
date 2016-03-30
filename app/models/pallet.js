import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  latitude: DS.attr(),
  longitude: DS.attr(),
  user: DS.belongsTo('user')
});
