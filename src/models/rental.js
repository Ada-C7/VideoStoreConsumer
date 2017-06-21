import Backbone from 'backbone';

var Rental = Backbone.Model.extend({

  url: 'http://localhost:3000/rentals/',

  checkoutUrl: function(movieTitle){
    this.url = this.url + movieTitle + "/check-out";
    return this;
  },

  checkinUrl: function(movieTitle){
    this.url = this.url + movieTitle + "/return";
    return this;
  }
});

export default Rental;
