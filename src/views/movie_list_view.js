import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import MovieView from './movie_view';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.movieTemplate = _.template($('#movie-card-template').html());
    this.movieList = [];

    this.model.forEach(function(rawMovie){
      this.addMovie(rawMovie);
    }, this);

  this.listenTo(this.model, 'add', this.addMovie);
  this.listenTo(this.model, 'update', this.render);
},

render: function() {
  $('#movie-list').empty();
  this.movieList.forEach(function(movie){
    movie.render();
    $('#movie-list').append(movie.$el);
  }, this);
  return this;
},

addMovie: function(movie){
  var movie = new MovieView ({
    model: movie,
    template: this.movieTemplate
  });
  this.movieList.push(movie);
}
});

export default MovieListView;
