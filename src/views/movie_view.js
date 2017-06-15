import Backbone from "backbone";
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';



var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click .add-movie': 'addMovie'
  },

  addMovie: function() {
    console.log("ADD MOVIE");
    console.log(this.model);
    var movie = new Movie(
      {title: this.model.attributes.title,
      release_date: this.model.attributes.release_date,
      overview: this.model.attributes.overview,
      image_url: this.model.attributes.image_url
    });
    console.log(movie);
    this.model.create(movie);
  }
});

export default MovieView;
