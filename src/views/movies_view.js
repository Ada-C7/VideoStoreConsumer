import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import MovieView from './movie_view.js';
import Movie from '../models/movie.js';
import DBMoviesView from './db_movies_view.js';
import DBMovies from '../collections/db_movies.js';
import DBMovie from '../models/db_movie.js';


var MoviesView = Backbone.View.extend({
     initialize: function(params) {
          this.template = params.resultTemplate;
          this.detailsTemplate = params.stockTemplate;
          this.dbMovies = new DBMovies();

          this.dbMoviesView = new DBMoviesView({
               movies: this.model,
               model: this.dbMovies,
               stockTemplate:  _.template($('#db-movie-template').html(), {variable: 'movie'}),
               el: '#db-movies'
          });

          this.model.fetch();

          this.listenTo(this.model, 'update', this.render);

     },
     render: function() {
          console.log("test");
          this.$('#movie-results').empty();
          this.$('#movies-stocked').empty();
          var that = this;

          this.model.each(function(movie) {
          var movieView = new MovieView({
               model: movie,
               template: that.template
          });

          that.$('#movies-stocked').append(movieView.render().$el);
          });

          return this;
     }
});

export default MoviesView;
