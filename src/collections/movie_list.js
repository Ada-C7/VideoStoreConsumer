import Backbone from 'backbone';
import Movie from '../models/movie';
import $ from 'jquery';
import _ from 'underscore';

var MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',
  parse: function(data) { // The parsing migth not be needed in this case
    return data;
  },
  comparator: function (model) {
        return model.get("title");
  },
  checkOut: function(data) {
      var url = "http://localhost:3000/rentals/" + data['movie_title'] + "/check-out";
      var rental = new Backbone.Model(data)

      return (this.sync || Backbone.sync).call(this, "create", rental, _.extend({
        url: url
      }));
   }
});


export default MovieList;
