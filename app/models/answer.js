import DS from 'ember-data';

export default DS.Model.extend({
  ans: DS.belongsTo('question', {async: true}),
  author: DS.attr()
});
