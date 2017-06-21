import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view';
import Movie from '../models/movie.js';
// import MovieList from '../collections/movie_list';

var MovieListView = Backbone.View.extend({
  initialize: function(params){
    this.movieTemplate = params.movieTemplate;
    this.addFormTemplate = params.addFormTemplate;
    this.renderRentalLibraryCallback = params.renderRentalLibraryCallback;
    this.movieCheckoutFormTemplate = params.movieCheckoutFormTemplate;
    this.customerShowMethod = params.customerShowMethod;

    this.listenTo(this.model, 'update' , this.render);
  },

  render: function(){
    console.log(' Movie list View in render>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    var self = this;
    self.$('#rental-library').empty();

    self.model.each(function(movie){
      var movieView = new MovieView({
        model: movie,
        movieTemplate: self.movieTemplate
      });
      self.$('#rental-library').append(movieView.render().$el);

      self.listenTo(movieView, 'openform' , self.addForm)
      self.listenTo(movieView, 'opencheckout' , self.checkoutForm)
    });
    return this;
  },

  events: {
    'click .btn-cancel': 'clearForm',
    'click .co-btn-cancel': 'clearCheckoutForm',

  },

  addForm: function(selectedMovie){
    // console.log("ran one AddForm");
    var compiledTemplate = this.addFormTemplate({
      movie: selectedMovie.model.toJSON()
    });
    $('#add-form').off('click', ".btn-save")
    $('#add-form').html(compiledTemplate);
    $('#add-form').on('click', ".btn-save", this.saveMovie.bind(this))
    return this;
  },

  checkoutForm: function(selectedMovie){
    var compiledTemplate = this.movieCheckoutFormTemplate({
      movie: selectedMovie.model.toJSON()
    });
    $('#movie-checkout-form').off('click', ".btn-save")
    $('#movie-checkout-form').html(compiledTemplate);
    $('#movie-checkout-form').on('click', ".btn-save", this.checkOutMovie.bind(this))

    this.customerShowMethod();
  },

  clearForm: function(){
    // console.log("triggered clearForm once");
    this.$('#title').val('');
    this.$('#overview').val('');
    this.$('#release_date').val('');
    this.$('#image_url').val('');
    this.$('#inventory').val('');
    this.$('#add-form').empty();
    this.$('#add-form').hide()
  },

  clearCheckoutForm: function(){
    this.$('#movie-checkout-form').empty();
    this.$('#movie-checkout-form').hide();
  },

  saveMovie: function(event) {
    event.preventDefault();
    event.stopPropagation();
    var rawMovie = this.getInput();
    // console.log(rawMovie);
    this.model.create(rawMovie, {
      wait: true,
      success: function(resp){
        this.renderRentalLibraryCallback();
        console.log(resp);
      }.bind(this),
      error: function(err) {
        console.log(err);
      }.bind(this)
    });
    this.clearForm();
  },

  checkOutMovie: function(event) {
    event.preventDefault();
    event.stopPropagation();
    var rawRental = this.getRentalInput();
    console.log(rawRental);
    this.model.checkOut(rawRental, {
      wait: true,
      success: function(resp){
        this.renderRentalLibraryCallback();
        console.log(resp);
      }.bind(this),
      error: function(err) {
        console.log(err);
      }.bind(this)
    });
    this.clearCheckoutForm();
  },

  getRentalInput: function() {
    var rental = {
      movie_title: this.$('#movie_title').val(),
      customer_id: this.$('#customer-dropdown').val(),
      due_date: this.$('#due_date').val()
    };
    return rental;
  },

  getInput: function() {
    // console.log("in getInput");
    var movie = {
      title: this.$('#title').val(),
      overview: this.$('#overview').val(),
      release_date: this.$('#release_date').val(),
      image_url: this.$('#image_url').val(),
      inventory: parseInt(this.$('#inventory').val())
    };
    movie.image_url = movie.image_url.substring(movie.image_url.indexOf("5")+1)
    // console.log(movie.image_url);
    return movie;
  }



});


export default MovieListView;
