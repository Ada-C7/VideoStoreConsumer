import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import SearchMovie from '../collections/search';
import MovieView from './movie_view';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.movieTemplate = _.template($('#movie-card-template').html());
    this.movieList = [];

    this.model.get("library").forEach(function(rawMovie){
      this.addMovie(rawMovie);
    }, this);

    this.input = {
      title: this.$('.search-movie-form input[name="title"]')
    };

    this.listenTo(this.model.get("library"), 'add', this.addMovie);
    this.listenTo(this.model.get("library"), 'update', this.render);
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
  },

  events: {
    'click .search-movie': 'searchMovie'
  },

  getInput: function() {
    var movie = {
      title: this.input.title.val()
    };
    return movie;
  },

  searchMovie: function(movie) {
    var _this = this;
    var searchMovie = new SearchMovie([], {query:this.getInput()["title"]});
    searchMovie.fetch({
      success: function(collection, response, options){
        var movie = collection.shift();
        _this.addMovie(movie);
        _this.render();
        // $('#movie-list').append(movie.$el);
      }
    });

  }
});

export default MovieListView;
