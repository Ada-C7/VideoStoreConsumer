import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import MovieView from './movie_view.js';
import Movie from '../models/movie.js';


var MoviesView = Backbone.View.extend({
     initialize: function(params) {
          this.template = params.resultTemplate;
          this.detailsTemplate = params.stockTemplate;
          this.listenTo(this.model, 'update', this.render);

          this.model.fetch();
     },
     render: function() {

         this.$('#movie-results').empty();
         this.$('#movies-stocked').empty();

          var that = this;

          this.model.each(function(movie) {
          var movieView = new MovieView({
               model: movie,
               template: that.template
          });
          that.$('#movie-results').append(movieView.render().$el);
          });
          return this;
     },
     events:  {
          'click #search-button' : 'searchMovie'

     },
     getFormData: function() {

       var formQuery = this.$('#query').val();
       this.$('#query').val('');
       console.log(formQuery);
       return formQuery;
     },
     searchMovie: function() {

          event.preventDefault();
          this.model.fetch({
            data: {query: this.getFormData()}
          });
     }

});

export default MoviesView;
