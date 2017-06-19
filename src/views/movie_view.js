import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var html = this.template({movie: this.model.attributes});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  }
});

export default MovieView;
