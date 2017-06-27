import Backbone from 'backbone';

var Rental = Backbone.Model.extend({

  url: 'http://localhost:3000/rentals/',

  initialize: function(params) {
    if (!this.has('due_date')) {
      var dueDate= new Date();
      dueDate.setDate(dueDate.getDate() + 5);
      this.set('due_date', dueDate);
    }
  },

  checkoutUrl: function(movieTitle){
    this.url = this.url + movieTitle + "/check-out";
    console.log("Inside of checkoutUrl");
    return this;
  },

  checkinUrl: function(movieTitle){
    this.url = this.url + movieTitle + "/return";
    console.log("Inside of checkinUrl");
    return this;
  }
});

export default Rental;
