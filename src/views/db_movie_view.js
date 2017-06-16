import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import DBMovie from '../models/db_movie.js';
import Movie from '../models/movie.js';


var DBMovieView = Backbone.View.extend({
     initialize: function(params) {
          this.template = params.template; // TODO: double check name of this template
          this.listenTo(this.model, 'change', this.render);
     },
     render: function() {
          var compiledTemplate = this.template(this.model.toJSON());
          this.$el.html(compiledTemplate);
          return this;
     },
     events:  {
          'click #add-button' : 'addMovie'
     },
     formatForMovie: function() {
          return {
               title: this.model.attributes.title,
               overview: this.model.attributes.overview,
               release_date: this.model.attributes.release_date,
               image_url: this.model.attributes.image_url,
               external_id: this.model.attributes.external_id
          };
     },
     createMovie: function() {
          event.preventDefault();
          var movie = new Movie(this.formatForMovie());
          this.trigger('created', movie)
          console.log(movie);
     }
});

export default DBMovieView;
