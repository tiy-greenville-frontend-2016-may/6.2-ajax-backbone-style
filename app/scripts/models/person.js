var Backbone = require('backbone');

var Character = Backbone.Model.extend({
  defaults: {
    health: 10,
    attackForce: 2
  },
  attack: function(character){
    var currentHealth = character.get('health');
    character.set('health', currentHealth - this.get('attackForce'));
  }
});

var CharacterCollection = Backbone.Collection.extend({
  model: Character,
  url: 'http://swapi.co/api/people/',
  parse: function(data) {
    return data.results;
  }
});

module.exports = {
  'Character': Character,
  'CharacterCollection': CharacterCollection
}
