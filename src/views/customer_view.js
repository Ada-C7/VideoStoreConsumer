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
    'click #customer-name' : 'customerNameSelected'
  },

  render: function() {
    var html = this.template({customer: this.model.attributes});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  customerSelected: function(event) {
    console.log("In customerSelected")
    Backbone.pubSub.selectedCustomer = this.model
    Backbone.pubSub.trigger('customerChosen', this.model)
  },

  customerNameSelected: function(event){
    console.log("In customer NAME Selected")

    var customerId =   Backbone.pubSub.selectedCustomerId

    var rentalList = new RentalList({ customerId: customerId });
    rentalList.fetch();

    var options = {
      el:  $('.main-content'),
      model: rentalList
    };

    var rentalListView = new RentalListView(options);
    rentalListView.render()

    console.log(rentalList)




  }




});

export default CustomerView;
