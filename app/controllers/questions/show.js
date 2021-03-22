import Controller from '@ember/controller';
import { inject } from "@ember/service";
import { computed } from '@ember/object';

export default Controller.extend({
    session: inject(),
    currentSession: inject(),
    userSignedIn: computed('model', function(){
        return this.get('session.isAuthenticated');
    }),

    questionOwner: computed('model', function(){
        if(this.get('userSignedIn')){
            return this.get("currentSession.user.email") 
        } else {
            return false;
        }
    }),

    actions: {}
});