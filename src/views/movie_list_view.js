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
    this.$('.messages').empty();
    var that = this;

    this.model.each(function(movie){
      var movieView = new MovieView({
        model: movie,
        template: that.template
      });
      that.$('#movie-list').append(movieView.render().$el);
    });
    return this;
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
    var errorHandler = function() {
      $(".messages").html("<h4>Error: Search field cannot be blank.</h4>");
    };

    this.template = _.template($('#search-list-template').html());
    this.model.fetch({
      error: errorHandler,
      traditional: true,
      data: {query: [this.getFormData()]}
    });

  }


});

export default MovieListView;
