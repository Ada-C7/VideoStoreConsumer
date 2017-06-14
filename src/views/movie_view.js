import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var MovieView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
  },
  render: function(){
    var compiledTemplate = this.template({
      movie: this.model.toJSON()});
      this.$el.html(compiledTemplate);
      return this;
    }
  });

  export default MovieView;
