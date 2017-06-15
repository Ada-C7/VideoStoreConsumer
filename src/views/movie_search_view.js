import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import MovieView from 'views/movie_view';
import SearchList from 'collections/search_list';

var MovieSearchView = Backbone.View.extend({
  initialize: function(params) {
    var self = this;

    this.movieListTemplate = params.movieListTemplate;

    this.model.forEach(function(movieData) {
      self.addSearchMovie(movieData);
    });

    this.listenTo(this.model, 'add', this.addSearchMovie);
    this.listenTo(this.model, 'update', this.render);
  },

  events: {
    'click #search-button': 'search'
  },

  addSearchMovie: function(movie){
    var movieView = new MovieView( {
      model: movie,
      movieListTemplate: this.movieListTemplate,
    });

    this.movieSearchViewList.push(movieView);
  },

  render: function(event){
    console.log("render being called");

    var self = this;
    this.$('#movie-list').empty();

    this.movieSearchViewList.forEach(function(movieView) {
      movieView.render();
      self.$('#movie-list').append(movieView.$el); // exp w/deleting el
    });

    return this;
  },

  search: function(event) {
    this.movieSearchViewList = [];
    var query = this.$('input[name="search"]').val();

    this.model.fetch({data: {query: query}});
  }
});

export default MovieSearchView;
