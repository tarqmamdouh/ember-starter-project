import DS from 'ember-data';

import { computed } from '@ember/object'

export default DS.Model.extend({
    body: DS.attr(),
    question: DS.belongsTo('question'),
    authorEmail: computed('model', function() {
        return this.get('author')['author-email']
    })
});