import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var MovieView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
  },
  events: {
    "click .add-movie": "addMovie"
  },
  render: function(){
    var compiledTemplate = this.template({
      movie: this.model.toJSON()
    });
    this.$el.html(compiledTemplate);
    return this;
  },
  addMovie: function(event) {
    console.log("I clicked add movie");
    console.log(event);

    // this.model
  }
});

export default MovieView;
