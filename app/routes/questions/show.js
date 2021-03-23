import Route from '@ember/routing/route';

export default Route.extend({
    model: function(params) {
        this.store.findRecord('question', params.slug);
    }
});