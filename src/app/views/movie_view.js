import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Movie from '../models/movie.js';

var MovieView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  
  attributes: {
    class: 'medium-4 columns movie nopadding'
  },

  events: {
    "click .add-movie" : "addMovieHandler",
    "click img" : "showDetailsHandler"
  },

  addMovieHandler: function(event){
    event.stopPropagation();
    this.trigger('addMovieListen', this.model);
  },

  showDetailsHandler: function(event){
    event.stopPropagation();
    this.trigger('showDetailsListen', this.model);
  },

  render: function(){
    var compiledTemplate = this.template({ movie: this.model.toJSON()});
    // console.log("Appending " + compiledTemplate);
    this.$el.html(compiledTemplate);
    return this;
  },
});

export default MovieView;
