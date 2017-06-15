import Backbone from 'backbone';
import Movie from '../models/movie';
import $ from 'jquery';

var MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',
  parse: function(data) { // The parsing migth not be needed in this case
    return data;
  },
  comparator: function (model) {
        return model.get("title");
  }
});


export default MovieList;
