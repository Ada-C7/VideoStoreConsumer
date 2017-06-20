import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Customer from '../models/customer.js';

var CustomerView = Backbone.View.extend({
  initialize: function(params){
    this.customerTemplate = params.customerTemplate;
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    console.log("made it here CUSTOMER VIEW");
    var self = this;
    var compiledTemplate = this.customerTemplate({
      customer: self.model.toJSON()
    });
    this.$el.html(compiledTemplate);
    return this;
  }
});


export default CustomerView;
