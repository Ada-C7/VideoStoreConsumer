import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Customer from '../models/customer.js';

var CustomerView = Backbone.View.extend({
  initialize: function(params) {
    this.template = _.template($('#tmpl-customer').html());
    // console.log('this.template inside CustomerView', this.template);
    // console.log('this.model iside CustomerView', this.model);

    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
    // '...' : '...',
  },




});

export default CustomerView;
