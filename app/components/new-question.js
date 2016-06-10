import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save1() {
      var params = {
        corpse: this.get('corpse'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.set('addNewRental', false);
      this.sendAction('save2', params);
    }
  }
});
