import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
    model() {
        return this.store.createRecord('question');
      },
    
      actions: {
        save(record) {
          record.save()
            .then(() => this.transitionTo('questions.show', record));
        },
    
        willTransition() {
          this._super(...arguments);
          const record = this.controller.get('model');
          record.rollbackAttributes();
        },
      },
});