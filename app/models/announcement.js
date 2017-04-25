import DS from 'ember-data';

export default DS.Model.extend({
  messageType: DS.attr(),
  message: DS.attr(),
});
