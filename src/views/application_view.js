import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import MovieView from 'views/movie_view';
import MovieList from 'collections/movie_list';
import SearchList from 'collections/search_list';
import MovieListView from 'views/movie_list_view';


var ApplicationView = Backbone.View.extend({
  initialize: function(params) {
    var self = this;

    this.movieSearchViewList = [];

    this.movieListTemplate = params.movieListTemplate;

    this.model.forEach(function(movieData) {
      self.addSearchMovie(movieData);
    });

    this.listenTo(this.model, 'add', this.addSearchMovie);
    this.listenTo(this.model, 'update', this.render);
  },

  events: {
    'click #search-button': 'hideIndex',
    'click #index-button': 'showIndex',
  },

  addSearchMovie: function(movie){

    console.log("addSearchMovie")
    var movieView = new MovieView( {
      model: movie,
      movieListTemplate: this.movieListTemplate,
    });

    this.movieSearchViewList.push(movieView);
  },

  render: function(event){

    console.log("APP render");

    var self = this;
    // this.movieListTemplate.empty();


    this.movieSearchViewList.forEach(function(movieView) {
      movieView.render();
      self.$('#search-list').append(movieView.$el); // exp w/deleting el
    });

    // this.showIndex();
    return this;
  },

  search: function(event) {
    console.log("search");

    // this.hideIndex();
    // this.movieSearchViewList = [];
    this.$('#search-list').empty();

    var query = this.$('input[name="search"]').val();

    this.model.fetch({data: {query: query}});
  },

  hideIndex: function(){
    console.log("hideIndex");

    $('#search-list').show();
    $('#movie-list').hide(); //hide movie index view
    $('#index-button').prop('disabled', false);
    this.search();
  },

  showIndex: function(){
    // this.movieSearchViewList = [];

    console.log("showIndex");
    $('#search-list').hide();
    $('#movie-list').show();

    $('#index-button').prop('disabled', true);

    var movieList = new MovieList();
    var movieListTemplate = _.template($('#movie-list-template').html());
    var movieTemplate = _.template($('#movie-template').html());

    // var movieListView = new MovieListView();

    var movieListView = new MovieListView({
      model: movieList,
      movieListTemplate: movieListTemplate,
      movieTemplate: movieTemplate,
      el: $("#application")
    });
    
    movieList.fetch();

    movieListView.render();

  },
});

export default ApplicationView;
