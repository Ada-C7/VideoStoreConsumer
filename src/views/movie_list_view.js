import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view.js';
import Movie from '../models/movie.js';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "update", this.render);

    this.model.fetch({
      success: function(data) {
        console.log("It worked (index)!", data);
      },
      failure: function(data) {
        console.log("Failure", data);
        this.$('#movie-list').append("<h2>Request failed.</h2>");
      }
    });
  },
  render: function() {
    this.$('#movie-list').empty();

    this.model.each((movie) => {
      var movieView = new MovieView({
        model: movie,
        template: this.template
      });
      this.$('#movie-list').append(movieView.render().el);
      this.listenTo(movieView, 'selectedMovie', this.showMovieDetails);
    });

    return this;
  },
  events: {
    "submit" : "searchFunction"
  },
  getInputData: function(){
    var input = this.$("input[name='query']").serialize();

    this.$("input[name='query']").val('');

    console.log('this is the input from', input);
    return input;
  },
  searchFunction: function(event){
    event.preventDefault();
    let query = this.getInputData();
    // console.log('this.model.url: ',this.model.url);
    this.model.fetch({
      data: query,
      success: function(data) {
        console.log("It worked! (search)", data);
      },
      failure: function(data) {
        console.log("Failure", data);
        this.$('#movie-list').append("<h2>Request failed.</h2>");
      }
    });
  },
  showMovieDetails: function(movie){
    // alert('heyyy movie details');

    movie.fetch({
      data: movie.title,
      success: function(data) {
        console.log("It worked (details)!", data);
        this.$("#movie-details").empty();
        this.$("#movie-details").toggleClass('hide');

        var detailsView = new MovieView({
          model: movie,
          template: _.template($('#tmpl-movie-details').html())
        });
        // append things
        this.$('#movie-details').append(detailsView.render().el);
      },
      failure: function(data) {
        console.log("Failure", data);
        this.$('#movie-list').append("<h2>Request failed.</h2>");
      }
    });

    // console.log(movie);
    // create new instance of Movie View
    // check if the movie has a external id
      // If does not have an external id
      // make a call to rails to get list of customers
      // save the response in a variable
      // listen for check_out
      // listen for check in
    //else
      // show movie
    // end
  },
  hideMovieDetails: function(){
    this.$('#movie-details').toggleClass('hide');
  }
});

export default MovieListView;
