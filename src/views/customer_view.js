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
    // console.log(this.model);
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    // maybe for rental
  }

});

export default CustomerView;
