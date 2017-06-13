import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';

var MovieView = Backbone.View.extend({

  initialize: function(params){
    this.movieTemplate = params.movieTemplate;
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    var compiledTemplate = this.movieTemplate({
      movie: this.model.toJSON()
    });
    this.$el.html(compiledTemplate);
    return this;
  }

});


export default MovieView;
