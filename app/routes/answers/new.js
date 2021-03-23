import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.createRecord('answer');
      },
    
      actions: {
        save(record) {
          record.save()
            .then(() => this.transitionTo('answers.show', record));
        },
    
        willTransition() {
          this._super(...arguments);
          const record = this.controller.get('model');
          record.rollbackAttributes();
        },
      },
});
