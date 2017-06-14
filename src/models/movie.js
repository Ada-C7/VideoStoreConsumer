import Backbone from 'backbone';

var Movie = Backbone.Model.extend({
  initialize: function(params) {
    console.log("Initialized movie " + this.get("title"));
  }
});

export default Movie;
