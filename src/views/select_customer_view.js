import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

var SelectCustomerView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    var compiledTemplate = this.template({ customers: this.model });
    this.$('main').append(compiledTemplate);
  }
});

export default SelectCustomerView;
