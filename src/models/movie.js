import Backbone from 'backbone';

var Movie = Backbone.Model.extend({
  defaults: {
    title: "Unknown",
    overview: "Unknown",
    release_date: "Unknown",
    inventory: "Unknown"
  },
  initialize: function(options) {
    console.log("Created new movie with options " + this.options);
  }

});

export default Movie;
