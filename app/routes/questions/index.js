import Route from '@ember/routing/route';

export default Route.extend({
    queryParams: {
        page: {
            refreshModel: true
        },
        tags: {
            refreshModel: true
        }
    },

    model: function(params) {
        return this.store.query('question', params);
    }
});