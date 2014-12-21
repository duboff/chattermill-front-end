import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr ('string'),
  sentimentScore: DS.attr('number'),
  weight: DS.attr('number'),
  project: DS.belongsTo('project', { async: true }),
  texts: DS.hasMany('text', {async: true})
});
