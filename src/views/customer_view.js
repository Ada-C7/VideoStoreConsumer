import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var CustomerView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var html = this.template({customer: this.model.attributes});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  }
});

export default CustomerView;
