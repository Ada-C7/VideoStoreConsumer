import Backbone from 'backbone';
import Rental from '../models/rental';

var RentalList = Backbone.Collection.extend({
  model: Rental,
  url: 'http://localhost:3000/rentals/',
  initialize: function(params) {
    this.customerId = params.customerId;
  },

  parse: function(data) {
    if (this.customerId) {
      var customerRentals = [];
      data.forEach((rental) => {
        if (rental.customer_id == this.customerId &&  rental.returned === false  )  {
          customerRentals.push(rental);
        }
      });
      console.log("Parsed rental list for customer " + this.customerId + ", kept " + customerRentals.length + " of " + data.length + " entries.");
      return customerRentals;
    } else {
      return data;
    }
  }
});

export default RentalList;
