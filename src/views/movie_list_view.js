import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
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

    this.searchList = [];

    this.listenTo(this.model.get("searchResults"), 'add', this.addSearchResult);
    this.listenTo(this.model.get("searchResults"), 'update', this.render);

    this.showSearchResults = false;

  },

  render: function() {
    $('#movie-list').empty();
    var movieList;
    if (this.showSearchResults){
      movieList = this.searchList;
    } else {
      movieList = this.movieList;
    }


    movieList.forEach(function(movie){
      movie.render();
      $('#movie-list').append(movie.$el);
      // this.$('#movie-list').append(MovieView.render().$el);
      this.listenTo(movie, 'add', this.addToLibrary);
    }, this);
    return this;
  },

  addToLibrary: function(movie) {
    var addMovie = {
      image_url: movie.get('image_url'),
      overview: movie.get('overview'),
      release_date: movie.get('release_date'),
      title: movie.get('title')
    };
    console.log(this.model);
    this.model.create(addMovie);

  },

  addMovie: function(movie){
    var movie = new MovieView ({
      model: movie,
      template: this.movieTemplate
    });
    this.movieList.push(movie);
  },

  addSearchResult: function(movie){
    var movie = new MovieView ({
      model: movie,
      template: this.movieTemplate
    });
    this.searchList.push(movie);
  },

  events: {
    'click .search-movie': 'searchMovie',
  },

  getInput: function() {
    var movie = {
      title: this.input.title.val()
    };
    return movie;
  },

  searchMovie: function(movie) {
    this.searchList = [];
    this.showSearchResults = true;
    this.model.get("searchResults").query = this.getInput()["title"];
    this.model.get("searchResults").fetch();

    // var _this = this;
    // var searchMovie = new SearchMovie([], {query:this.getInput()["title"]});
    // searchMovie.fetch({
    //   success: function(collection, response, options){
    //     var movie = collection.shift();
    //     _this.addMovie(movie);
    //     _this.render();
    //     // $('#movie-list').append(movie.$el);
    //   }
    // });

  }
});

export default MovieListView;
