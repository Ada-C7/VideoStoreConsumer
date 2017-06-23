import Backbone from "backbone";
import _ from 'underscore';
import $ from 'jquery';
import Customer from '../models/customer.js';


var CustomerView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
  },

  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el = compiledTemplate;
    // this.$el.html(compiledTemplate);
    return this;
  },
  events: {}
});


export default CustomerView;
