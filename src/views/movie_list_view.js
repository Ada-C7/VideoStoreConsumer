import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import MovieView from 'views/movie_view';
import SearchList from 'collections/search_list';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    var self = this;

    this.movieListTemplate = params.movieListTemplate;
    this.movieTemplate = params.movieTemplate;

    this.movieViewList = [];

    this.model.forEach(function(movieData) {
      self.addMovie(movieData);
    });

    this.listenTo(this.model, 'add', this.addMovie);
    this.listenTo(this.model, 'update', this.render);
  },
  events: {
    'click #search-button': 'search'
  },

  render: function() {
    var self = this;
    this.$('#movie-list').empty();

    this.movieViewList.forEach(function(movieView) {
      movieView.render();
      self.$('#movie-list').append(movieView.$el); // exp w/deleting el
    });
    return this;
  },

  addMovie: function(movie) {
    var movieView = new MovieView( {
      model: movie,
      movieListTemplate: this.movieListTemplate,
    });

    this.movieViewList.push(movieView);
  },

  search: function(event) {
    console.log("Working");
    console.log(event);

    var query = this.$('input[name="search"]').val();

    var newSearch = new SearchList();
    newSearch.fetch({data: {query: query}});
  }
});

export default MovieListView;
