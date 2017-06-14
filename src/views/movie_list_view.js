import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view.js';
import Movie from '../models/movie.js';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    // other templates maybe?

    this.listenTo(this.model, "update", this.render);

    this.model.fetch({
      success: function(data) {
        // console.log("It worked!", data);
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
        // console.log("It worked!", data);
      },
      failure: function(data) {
        console.log("Failure", data);
        this.$('#movie-list').append("<h2>Request failed.</h2>");
      }
    });
  }
});

export default MovieListView;
