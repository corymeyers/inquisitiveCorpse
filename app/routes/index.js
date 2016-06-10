import Ember from 'ember';

// var questions = [{
//   id: 1,
//   corpse: "What is the color of the moon?",
//   author: "Chairface",
//   notes: "no no notes"
// }, {
//   id: 2,
//   corpse: "How did a tree get its name?",
//   author: "Sofrates",
//   notes: "noted"
// }, {
//   id: 3,
//   corpse: "Which is better, Ember or ice cream?",
//   author: "Nancy",
//   notes: "feeling troubled"
// }];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
});
