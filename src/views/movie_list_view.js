import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view';
import Movie from '../models/movie.js';

var MovieListView = Backbone.View.extend({
  initialize: function(params){
    this.movieTemplate = params.movieTemplate;
    this.addFormTemplate = params.addFormTemplate;
    this.renderRentalLibraryCallback = params.renderRentalLibraryCallback;

    this.listenTo(this.model, 'update' , this.render);
  },

  render: function(){
    console.log(' Movie list View in render>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    var self = this;
    this.$('#rental-library').empty();

    this.model.each(function(movie){
      var movieView = new MovieView({
        model: movie,
        movieTemplate: self.movieTemplate
      });
      self.$('#rental-library').append(movieView.render().$el);

      self.listenTo(movieView, 'openform' , self.addForm)
    });
    return this;
  },

  events: {
    'click .btn-cancel': 'clearForm',
  },

  addForm: function(selectedMovie){
    console.log("ran one AddForm");
    var compiledTemplate = this.addFormTemplate({
      movie: selectedMovie.model.toJSON()
    });
    $('#add-form').off('click', ".btn-save")
    $('#add-form').html(compiledTemplate);
    $('#add-form').on('click', ".btn-save", this.saveMovie.bind(this))
    return this;
  },

  clearForm: function(){
    console.log("triggered clearForm once");
    this.$('#title').val('');
    this.$('#overview').val('');
    this.$('#release_date').val('');
    this.$('#image_url').val('');
    this.$('#inventory').val('');
    this.$('#add-form').empty();
    this.$('#add-form').hide()
  },

  saveMovie: function(event) {
    console.log(this);
    event.preventDefault();
    event.stopPropagation();
    var rawMovie = this.getInput();
    console.log(rawMovie);
    this.model.create(rawMovie);
    this.clearForm();
    this.renderRentalLibraryCallback();
  },

  getInput: function() {
    console.log("in getInput");
    var movie = {
      title: this.$('#title').val(),
      overview: this.$('#overview').val(),
      release_date: this.$('#release_date').val(),
      image_url: this.$('#image_url').val(),
      inventory: this.$('#inventory').val()
    };
    return movie;
  }



});


export default MovieListView;
