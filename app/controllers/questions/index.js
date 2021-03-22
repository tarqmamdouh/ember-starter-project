import Controller from '@ember/controller';
import { computed } from '@ember/object'

export default Controller.extend({
    queryParams: ['page'],
    page: 1,

    metaData: computed('model', function() {
        let meta = this.get('model.meta');
        if (meta) {
            meta['second_last'] = meta.total_pages - 1;
            meta['third_last'] = meta.total_pages - 2;
        }
        return meta;
    }),

    lastThreePages: computed('model', function() {
        if (this.get('page') < this.get('metaData.total_pages') - 2) {
            return false;
        } else {
            return true;
        }
    }),

    filtersNotApplied: computed('model', function() {
        return this.get('tags') == '' || this.get('tags') == undefined
    }),

    actions: {
        nextPage() {
            if (this.get('metaData.next_page') != null) {
                this.set('page', this.get('page') + 1);
            }
        },

        prevPage() {
            if (this.get('page') > 1) {
                this.set('page', this.get('page') - 1);
            }
        }
    }

});