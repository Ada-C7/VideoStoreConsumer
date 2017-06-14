import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import MovieView from './movie_view';

var RentalLibraryView = Backbone.View.extend({
  initialize: function(options) {
    //we are creating our template to be used later on
    this.moviesBulletTemplate = _.template($('#movie-card-template').html());
    //keeping track of the element we will want to append to later on
    this.listElement = this.$('.movie-list');

    //creating empty array that we will be using to push our movie instances into later on
    this.movieList = [];

    //this.model = RentalLibrary, which is our list of rental movies in our rails API
    this.model.forEach(function(movie){
      this.addMovie(movie);
    }, this);

    // When a model is added to the collection, create a card for that model and add it to our list of cards
    this.listenTo(this.model, 'add', this.addMovie);
    // When the model updates, re-render the list of cards
    this.listenTo(this.model, 'update', this.render);

  },
  render: function() {
    // Make sure the list in the DOM is empty before we start appending items
    this.listElement.empty();


    this.movieList.forEach(function(movie){
      movie.render();
      this.listElement.append(movie.$el);
    }, this);

  },

  addMovie: function(movie){
    var movie = new MovieView({
      model: movie,
      template: this.moviesBulletTemplate
    });
    // this.listenTo(movie)
    this.movieList.push(movie);
  }
});

export default RentalLibraryView;
