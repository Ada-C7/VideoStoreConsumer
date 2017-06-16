import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import MovieView from './movie_view.js';
import Movie from '../models/movie.js';
import DBMoviesView from './db_movies_view.js';


var MoviesView = Backbone.View.extend({
     initialize: function(params) {
          this.template = params.resultTemplate;
          this.detailsTemplate = params.stockTemplate;
          this.listenTo(this.model, 'update', this.render);
          // this.listenTo(DBMoviesView, 'refresh', this.render);

          this.model.fetch();
     },
     render: function() {
        // this.$('#movies').empty();
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
          console.log('test');
          return this;

     }
    //  events:  {
    //       'click #add-button' : 'render'
    //  }
     // getFormData: function() {
     //      var formQuery = this.$('#query').val();
     //      this.$('#query').val('');
     //      return formQuery;
     // },
     // searchMovie: function() {
     //      event.preventDefault();
     //      this.model.fetch({
     //      data: {query: this.getFormData()}
     //      });
     //
     // }

});

export default MoviesView;
