import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      questions: this.store.findRecord('question', params.question_id)
  //  return this.store.findRecord('question', params.question_id);
  //  return this.store.findRecord('answer', params.answer_id);
 });
  },
   actions: {
     update(question, params) {
       Object.keys(params).forEach(function(key) {
         if(params[key]!==undefined) {
           question.set(key,params[key]);
         }
       });
       question.save();
       this.transitionTo('index');
     }
   }
});
