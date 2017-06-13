import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var MovieView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
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
