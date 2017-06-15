import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';

var MovieView = Backbone.View.extend({
  tagName: 'table',
  className: 'table-list',
  initialize: function(params){
    this.movieTemplate = params.movieTemplate;

    this.listenTo(this.model, "change", this.render);
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function(){
    var compiledTemplate = this.movieTemplate({
      movie: this.model.toJSON()
    });
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    "click #open-add-form": "openForm"
  },

  openForm: function(e){
    console.log("one openForm");
    $('#add-form').show()
    this.trigger('openform',this)
  }
});


export default MovieView;
