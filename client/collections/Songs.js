// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.fetch();
  },  

  fetch: function(song) {
    let cool = this;
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.la.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      success: function (data) {
        console.log('success!');
        for (var i = 0; i < data.results.length; i++) {
          cool.push(data.results[i]);
        }
      },
      error: function () {
        console.log('failed');
      }
    });
  }
});
