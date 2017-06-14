import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import DBMovieView from './db_movie_view.js';
import DBMovie from '../models/db_movie.js';




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
     }
     // events:  {
     //      'click #search-button' : 'searchMovie'
     // },
     // // getFormData: function() {
     // //      var formQuery = this.$('#query').val();
     // //      this.$('#query').val('');
     // //      return formQuery;
     // // },
     // searchMovie: function() {
     //      event.preventDefault();
     //
     //      this.model.fetch({
     //      data: {query: this.getFormData()}
     //      });
     //
     // }
});

export default DBMoviesView;
