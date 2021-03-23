import DS from 'ember-data';
export default DS.Model.extend({
    body: DS.attr(),
    question: DS.belongsTo('question'),
    author: DS.attr()
});