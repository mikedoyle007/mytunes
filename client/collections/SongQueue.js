// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(song) {
    // this.collection.on('change', this.play, this);
    // initialize new songQ to 0 songs
    // if (this.models.length === 0 && song === true) {
    //   this.push(song);
    // }
    this.on('add', function(song) {
      if (this.models.length === 1) {
        this.playFirst();
      }
      this.models.push(song);
    });

    this.on('ended', function() {
      this.models.shift();
      this.playFirst();
    });

    this.on('enqueue', function () {
      this.models.push();
    });

    this.on('dequeue', function() {
      this.models.shift();
    });

  },

  // add: function(song) {
  //   console.log(song);
  //   this.models.push(song);
    
  //   // debugger;
  //   if (this.models.length === 1 && song.length < 2) {
  //     this.playFirst();
  //   }

  playFirst: function() {
    this.at(0).play();
  }

});
