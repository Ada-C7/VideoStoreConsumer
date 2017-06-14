import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view.js';
import Movie from '../models/movie.js';
import MovieList from '../collections/movie_list.js';

var MovieListView = Backbone.View.extend ({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$('#movie-list').empty();
    var that = this;

    this.model.each(function(movie){
      var movieView = new MovieView({
        model: movie,
        template: that.template
      });
      that.$('#movie-list').append(movieView.render().$el);
    });
  },

  events: {
    "click #search-movies" : "searchMovie"
  },

  getFormData: function() {
    var formTitle = this.$("#title").val();
    this.$("#title").val('');

    return formTitle;
  },

  searchMovie: function() {


    // var searchTerm = this.getFormData();
    var searchMovieList = new MovieList();
    searchMovieList.fetch({ error: function() {console.log(arguments);},
      traditional: true,
      data: {query: [this.getFormData()]}
    });

    this.model = searchMovieList;
    console.log(this.model);
    this.template = _.template($('#search-list-template').html());
    console.log(this.template);
    myMovieListView.render();

    // var searchMovieListView = new MovieListView({
    //   model: searchMovieList,
    //   template: _.template($('#search-list-template').html()),
    //   el: 'main'
    // });
    //
    // searchMovieList.render();
  }


});

export default MovieListView;
