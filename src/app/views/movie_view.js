import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Movie from '../models/movie.js';

var MovieView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    "click .add-movie" : "addMovieHandler"
  },

  addMovieHandler: function(event){
    event.stopPropagation();
    this.trigger('addMovieListen', this.model);
  },

  render: function(){
    var compiledTemplate = this.template({ movie: this.model.toJSON()});
    // console.log("Appending " + compiledTemplate);
    this.$el.html(compiledTemplate);
    return this;
  },
});

export default MovieView;
