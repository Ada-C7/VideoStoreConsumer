import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import MovieView from './movie_view';
import Movie from '../models/movie.js'

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);

  },
  render: function(){
    this.$('#movie-list').empty();
    var that = this;
    console.log(this.model);
    this.model.each(function(movie){

      var movieView = new MovieView({
        model: movie,
        template: that.template,
      });

      that.$('#movie-list').append(movieView.render().$el);
    });
    return this;
  },
  events: {
    'submit #searchbar' : 'searchMovies'
  },
  searchMovies: function(){
    event.preventDefault();

    this.model.url = 'http://localhost:3000/movies' + '?query=' + ($('#search').val());
    this.model.fetch();
  }
});

export default MovieListView;
