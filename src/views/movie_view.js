import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var compiledTemplate = this.template({movie: this.model.toJSON()});
    this.$el.html(compiledTemplate);

    this.delegateEvents();
    return this;
  }
});

export default MovieView;
