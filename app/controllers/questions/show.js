import Controller from '@ember/controller';
import { inject } from "@ember/service";
import { computed } from '@ember/object';

export default Controller.extend({
    session: inject(),
    currentSession: inject(),
    userSignedIn: computed('model', function(){
        return this.get('session.isAuthenticated');
    }),

    answerContent: '',
    deleteModal: false,

    questionOwner: computed('model', function(){
        if(this.get('userSignedIn')){
            return this.get("currentSession.user.email") ;
        } else {
            return false;
        }
    }),

    actions: {
        addAnswer(model, answer) {
          this.store.createRecord('answer', {
            question: model,
            body: answer
          }).save().then(() => this.set('answerContent', ''));
        },

        deleteAnswer(answer) {
            answer.destroyRecord()
        }
    }
});