import Backbone from 'backbone';
import Customers from '../collections/customers.js';
import $ from 'jquery';
import _ from 'underscore';

var RentCustomersView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
    console.log(this.template);
  },
  render: function() {
    // console.log()
    var compiledTemplate = this.template({customers: this.model});
    this.$el.html(compiledTemplate);
    return this;
  }
});

export default RentCustomersView;
