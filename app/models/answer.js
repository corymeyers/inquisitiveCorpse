import DS from 'ember-data';

export default DS.Model.extend({
  ans: DS.attr(),
  author: DS.attr()
});
