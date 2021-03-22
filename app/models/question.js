import DS from 'ember-data';
import { computed } from '@ember/object'

export default DS.Model.extend({
    title: DS.attr(),
    description: DS.attr(),
    tags: DS.attr(),
    tagsstring: DS.attr(),
    author: DS.attr(),
    slug: DS.attr(),
    created_at: DS.attr(),
    publishedDate: computed('model', function() {
        return new Date(this.get('created_at')).toDateString();
    }),

    authorEmail: computed('model', function() {
        return this.get('author')['author-email']
    }),
    publishedTime: computed('model', function() {
        return new Date(this.get('created_at')).toLocaleTimeString();
    }),

    tag_list: computed('model', function() {
        return this.get('tags').split(',');
    }),

    answers: DS.hasMany('answer')
});