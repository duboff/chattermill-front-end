import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  body: DS.attr('string'),
  themes: DS.hasMany('theme', { async: true }),
  texts: DS.hasMany('text', { async: true }),
  company: DS.belongsTo('company', { async: true }),
  sentimentScore: function () {
    var themes = this.get('themes');

    var sum = themes.reduce(function(previousValue, theme){
            return previousValue + theme.get('sentimentScore');
    }, 0);
    var av = sum / themes.get('length');
    return (Math.round(av * 100) / 100);
  }.property('themes.@each.sentimentScore'),
  projectThemes: function () {
    var themes = this.get('themes');

    var a = themes.map(function(theme) {
      return {id: theme.get('id'), body: theme.get('body'), sentimentScore: theme.get('sentimentScore'), weight: theme.get('weight')};
    });
    return a;
  }.property('themes.@each.sentimentScore', 'themes.@each.body', 'themes.@each.weight', 'themes.@each.id')
});
