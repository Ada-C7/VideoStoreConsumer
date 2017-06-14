import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';

var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
    'click #add' : 'addMovie',
  },
  addMovie: function() {
    console.log(this.model);
    // put HTTP request, sending title, overview, releasedate, image_url
    // passes JSON in request
    // send {
    //   title: movieTitle,
    //   overview: movieOverview,
    //   release_date: movieReleaseDate,
    //   image_url: movieImage
    // };
  }
});

export default MovieView;
