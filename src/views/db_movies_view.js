import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import DBMovieView from './db_movie_view.js';
import DBMovie from '../models/db_movie.js';
import Movie from '../models/movie.js';

var DBMoviesView = Backbone.View.extend({
     initialize: function( params ) {
          this.template = params.stockTemplate;
          this.listenTo(this.model, 'update', this.render);
     },
     render: function() {

         this.$( '#movie-results' ).empty();

          var that = this;

          this.model.each(function( dbMovie ) {
          var dbMovieView = new DBMovieView({
               model: dbMovie,
               template: that.template
          });
          that.$('#movie-results').append( dbMovieView.render().$el );
          });
          return this;
     },
     events:  {
          'click #search-button' : 'searchMovie',
          'click #add-button' : 'addMovie'
     },
     getFormSearch: function() {
          var formQuery = this.$('#query').val();
          this.$('#query').val('');
          return formQuery;
     },
     getFormAdd: function() {
          var formAdd = this.$('#external-id').val();
          this.$('#external-id').val('');
          return formAdd;
     },
     searchMovie: function() {
          event.preventDefault();

          this.model.fetch({
               data: {query: this.getFormSearch()}
          });
     },
     addMovie: function() {
          console.log(this.getFormAdd());
          event.preventDefault();
          var movie = new Movie(this.model.get(this.getFormAdd()));
          this.model.create(movie);
     }
});

export default DBMoviesView;
