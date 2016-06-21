var $ = require('jquery');
var Backbone = require('backbone');

var LikeButton = Backbone.Model.extend({
  defaults: {
    likes: 100,
    label: 'Like'
  },
  initialize: function(){
    console.log('initialize');
    var self = this;
    var $button = $('<button class="btn btn-primary" />');
    $('.app').append($button);

    self.updateLabel($button);

    $button.on('click', function(event){
      event.preventDefault();
      self.countLikes();
      self.updateLabel(this);
    });
  },
  countLikes: function(){
    var newLikes = this.get('likes') + 1;
    this.set('likes', newLikes);
  },
  // toJSON: function(btn){
  //   //this.updateLabel(btn);
  //   var $button = $(btn);
  //   var plural = this.get('likes') == 1 ? '' : 's';
  //
  //   $button.text(this.get('likes') + ' ' + this.get('label') + plural);
  //
  //   return Backbone.Model.prototype.toJSON.apply(this);
  // },
  updateLabel: function(btn){
    var $button = $(btn);
    var plural = this.get('likes') == 1 ? '' : 's';

    $button.text(this.get('likes') + ' ' + this.get('label') + plural);
  }
});

module.exports = LikeButton;
