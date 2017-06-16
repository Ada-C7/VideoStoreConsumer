import Backbone from 'backbone';

var Movie = Backbone.Model.extend({

  initialize: function(params) {

  },

  url: 'http://localhost:3000/movies'


});

export default Movie;
