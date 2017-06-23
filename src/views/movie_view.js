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
    var self = this;
    // console.log('render individual movie ****************************');
    // console.log(self.model.toJSON());
    var compiledTemplate = this.movieTemplate({
      movie: self.model.toJSON()
    });
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    "click #open-add-form": "openForm",
    "click #to-movie-checkout": "openCheckout"
  },

  openForm: function(e){
    console.log("one openForm");
    $('#add-form').show()
    this.trigger('openform',this)
  },

  openCheckout: function(e){
    console.log("in openCheckout callback-function");
    $('#movie-checkout-form').show()
    this.trigger('opencheckout',this)
  }
});


export default MovieView;
