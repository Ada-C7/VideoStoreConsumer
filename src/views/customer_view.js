import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

Backbone.pubSub = _.extend({}, Backbone.Events);

var CustomerView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    'click #choose-customer-button': 'customerSelected'
  },

  render: function() {
    var html = this.template({customer: this.model.attributes});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  customerSelected: function(event) {
    console.log("In customerSelected")
    Backbone.pubSub.trigger('customerChosen', this.model)
    // console.log(this.model);
  }
});

export default CustomerView;
