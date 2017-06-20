
import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import MovieCardView from "./movie_card_view";
import Movie from '../models/movie';

var MovieView = Backbone.View.extend({

  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change",
    this.render);
  },

  render: function() {
    var compiledTemplate = this.template(this.model.toJSON() );
    this.$el.html(compiledTemplate);
    return this;
  },

  events:  {
    "click #add-to-library": "add",
    "click .movie-card": "selected"
  },

  selected: function(event) {
    this.trigger("selected", this.model);
    event.stopPropagation();
  },
  // var that = this;
  // this.model.each(function(movie){
  //listener will have this code and that happens in the library view

  add: function(){
    console.log(this.model);
    this.model.save();
  },
});


  export default MovieView;
