import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Movie from '../models/movie.js';
import MovieView from '../views/movie_view.js';


var MovieListView = Backbone.View.extend({
  initialize: function(params){
    this.listenTo(this.model, 'update', this.render);
    this.template = _.template($('#movie-template').html());
    this.modalTemplate = _.template($('#movie-details-template').html());
  },

  render: function(){
    this.clearLibrary();
    var self = this;

    this.model.each(function(movie){
      var movieView = new MovieView({
        model: movie,
        template: self.template,
        tagName: 'section'
      });
      // console.log("rendering ", movieView.model);
      self.$('.movie-library').append(movieView.render().$el);
      self.listenTo(movieView, "addMovieListen", self.addToLibrary);
      self.listenTo(movieView, "showDetailsListen", self.showDetails);
    });

    $('body').keydown(function(event){
      if (event.keyCode == 13) {
        self.getSearchResults();
      }
    });

    return this;
  },

  events: {
    "click .search-button" : "getSearchResults",
    "click" : "hideDetails"
  },

  addToLibrary: function(movie){
    // var newMovie = new Movie(movie);
    // this.model.create(newMovie);
    var self = this;

    movie.save(undefined, {success: function(){
      self.template = _.template($('#movie-template').html());
      self.model.fetch();
    }});
  },

  showDetails: function(movie){
    var self = this;
    // This is to be able to render inventory and avilable_inventory
    movie.fetch({
      success: function() {
        $('.movie-details').empty();
        $('.movie-details').show();
        var generatedModalTemplate =  self.modalTemplate(movie.toJSON());
        self.$('.movie-details').append(generatedModalTemplate);
        console.log("this is " + movie);

      }
    });
    // console.log("this is " + movie);

  },

  hideDetails: function(){
    this.$('.movie-details').empty();
  },

  clearLibrary: function(){
    this.$('.movie-library').empty();
  },

  getSearchResults: function() {
    $('.movie-details').empty();
    var queryInput = this.$('.input-group-field').val();
    this.$('.input-group-field').val('');
    this.template = _.template($('#search-template').html());

    this.model.fetch({data: {query: queryInput}});
  },

});

export default MovieListView;
