import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Movie from '../models/movie.js';

var MovieView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },

  render: function(){
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
});

export default MovieView;
