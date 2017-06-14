import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Movie from '../models/movie.js';

var MovieView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render: function(){
    var compliledTemplate = this.template(this.model.toJSON());
    this.$el.html(compliledTemplate);
    return this;
  },
});

export default MovieView;
