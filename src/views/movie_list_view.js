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
    this.model.fetch();
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
    "submit #search" : "getInputData"
  },
  getInputData: function(){

    var input = this.$("input[name='query']").val();
    console.log('this is the input from', input);
    this.$("input[name='query']").val('');

    return input.seralize();
  },
  searchFunction: function(){
    let something = this.getInputData();
    console.log('this.model.url: ',this.model.url);
  }
});

export default MovieListView;
