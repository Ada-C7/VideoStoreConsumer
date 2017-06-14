import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view';
import Movie from '../models/movie.js';

var MovieListView = Backbone.View.extend({
  initialize: function(params){
    this.movieTemplate = params.movieTemplate;
    this.addFormTemplate = params.addFormTemplate;
    this.listenTo(this.model, 'update' , this.render)
    this.listenTo(this.model, 'openform' , this.addForm)
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
      self.listenTo(movieView, 'openform' , self.addForm)
    });
    return this;
  },

  events: {
    'click .btn-cancel': 'clearForm'
  },

  addForm: function(selectedMovie){
    var compiledTemplate = this.addFormTemplate({
      movie: selectedMovie.model.toJSON()
    });
    $('#add-form').html(compiledTemplate);
    return this;
  },

  clearForm: function(){
    this.$('#title').val('');
    this.$('#overview').val('');
    this.$('#release_date').val('');
    this.$('#image_url').val('');
    this.$('#inventory').val('');
    this.$('#add-form').empty();
  }



});


export default MovieListView;
