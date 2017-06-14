import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view';
import Movie from '../models/movie.js';

var MovieListView = Backbone.View.extend({
  initialize: function(params){
    this.movieTemplate = params.movieTemplate;

    this.listenTo(this.model, 'update' , this.render)
  },

  render: function(){
    console.log('in render>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    var self = this;
    this.$('#rental-library').empty();
    this.model.each(function(movie){
      var movieView = new MovieView({
        model: movie,
        movieTemplate: self.movieTemplate
      });
      self.$('#rental-library').append(movieView.render().$el);
      // self.listenTo(petView,'select', self.pet_details)
    });
    return this;
  },
  events: {
    'click submit-button': 'clickHELP'
  },
  clickHELP: function() {
    console.log("DID THE THING");
  }

});


export default MovieListView;
