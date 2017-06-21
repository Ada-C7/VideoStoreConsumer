import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import RentalListView from './rental_list_view'
import RentalList from '../collections/rental_list'

var CustomerView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    'click #choose-customer-button': 'customerSelected',
    'click .customer-name' : 'customerNameSelected'
  },

  render: function() {
    var html = this.template({customer: this.model.attributes});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  customerSelected: function(event) {
    Backbone.pubSub.selectedCustomer = this.model;
    Backbone.pubSub.trigger('customerChosen', this.model);
  },

  customerNameSelected: function(event){
    Backbone.pubSub.selectedCustomerId = this.model.attributes.id;

    var customerId = Backbone.pubSub.selectedCustomerId;
    var rentalList = new RentalList({ customerId: customerId });
    rentalList.fetch();

    var options = {
      el:  $('.main-content'),
      model: rentalList
    };

    var rentalListView = new RentalListView(options);
    rentalListView.render();
  }

});

export default CustomerView;
