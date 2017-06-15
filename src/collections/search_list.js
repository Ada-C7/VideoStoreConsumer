import Backbone from 'backbone';
import Movie from 'models/movie';

var SearchList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies/search'
});

export default SearchList;
