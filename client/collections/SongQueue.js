// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(song) {

    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
      this.push(song);
    });

    this.on('ended', function() {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    });

    this.on('enqueue', function () {
      this.push();
    });

    this.on('dequeue', function() {
      if (this.length > 0) {
        this.shift();
      }
    });

  },

  playFirst: function() {
    this.at(0).play();
  }

});
