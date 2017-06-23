import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Customer from '../models/customer.js';

const CustomerView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
  },

  render: function() {
    console.log("rendering indiv customer view");
    var old_date = new Date(this.model.get("registered_at"));
    // var old_date = this.model.get("registered_at");
    var new_date = old_date.toDateString();
    this.model.set("registered_at", new_date);
    // console.log(this.model.get("registered_at"));
    // console.log(this.model);
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    "click button.manage-rental": "triggerShowRentals"
  },

  triggerShowRentals: function() {
    this.trigger("showRentals", this);
  }

});

export default CustomerView;
