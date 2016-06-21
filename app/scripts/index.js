var $ = require('jquery');
var CharacterCollection = require('./models/person').CharacterCollection;

var charOne, charTwo;
var starwarsCharacters = new CharacterCollection();

var startGameView = {
  clear: function(){
    $('.app').html('');
  },
  render: function(collection){
    $('.app').html('<select name="js-first-character" id="js-first-character" /><select name="js-second-character" id="js-second-character" />');

    collection.each(function(character){
      $('#js-first-character').append('<option value="' + character.cid + '">' + character.get('name') + '</option>');
      $('#js-second-character').append('<option value="' + character.cid + '">' + character.get('name') + '</option>');
    });

    $('.app').append('<button class="start btn btn-success">Start</button>');

    $('.start').on('click', function(event){
      characterListView.render();
    });
  }
};

var characterListView = {
  clear: function(){

  },
  render: function(){

    charOne = starwarsCharacters.find(function(model){
      return model.cid == $('#js-first-character').val();
    });

    charTwo = starwarsCharacters.find(function(model){
      return model.cid == $('#js-second-character').val();
    });

    $('.app').append('<button class="attack btn btn-danger">Attack</button>');
    $('.start').hide();

    $('.characters').append('<div class="col-md-6">' + charOne.get('name') + '::' + charOne.get('health') + '</div>');
    $('.characters').append('<div class="col-md-6">' + charTwo.get('name') + '::' + charOne.get('health') + '</div>');

    $('.attack').on('click', function(){
      charOne.attack(charTwo);
      console.log(charTwo.get('health'));
    });

    charTwo.on('change:health', this.updateCharacter);
  },
  updateCharacter: function(model){
    alert('updateCharacter');
    $('.app').append('<h1>' + model.get('health') + '</h1>');
  }
};

starwarsCharacters.fetch().done(function(){
  console.log('Fetch complete!');
  console.log(starwarsCharacters);

  startGameView.render(starwarsCharacters);
});




/*
 * Like buttons
 */
// var LikeButton = require('./models/button');
//
// var facebookFriendButton = new LikeButton({likes: 500, 'label': 'Friend'});
// var tweeterButton = new LikeButton({likes: 0, 'label': 'Tweet'});
// var likeButton = new LikeButton();

/*
 * Backbone ajax challenge
 */
// var $ = require('jquery');
// var Backbone = require('backbone');
//
// var Starship = Backbone.Model.extend();
//
// var StarshipCollection = Backbone.Collection.extend({
//   model: Starship,
//   url: 'http://swapi.co/api/starships/',
//   parse: function(data){
//     return data.results;
//   }
// });
//
// var starships = new StarshipCollection();
//
// starships.fetch();
//
// starships.on('add', function(model){
//   $('.app').append(model.get('name') + model.get('cargo_capacity') +  '<br />');
// });
