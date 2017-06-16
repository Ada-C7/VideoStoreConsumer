import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import MovieCardView from "./movie_card_view";
import Movie from '../models/movie';
console.log("crumb 4");

var MovieView = Backbone.View.extend({

  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change",
    this.render);
  },

  selected: function(event) {
    console.log(this.model);
    console.log("clicked on a movie");
    // $('#movie-list').empty();
    this.trigger("selected", this.model);
    event.stopPropagation();
  },
  // var that = this;
  // this.model.each(function(movie){
  //listener will have this code and that happens in the library view

  render: function() {
    var compiledTemplate = this.template(this.model.toJSON() );
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    "click .movie-card": "selected"

  }
});


  export default MovieView;
