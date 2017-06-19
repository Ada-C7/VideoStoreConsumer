import Backbone from 'backbone';

var Movie = Backbone.Model.extend({
  url: 'http://localhost:3000/movies/'
});

export default Movie;
