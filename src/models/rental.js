import Backbone from 'backbone';

var Rental = Backbone.Model.extend({
  defaults :{
    customer_id: 0,
    movie_id: 0,
    checkout_date: "",
    due_date: ""
  },
  initialize: function(options) {
    this.query = options;
    console.log("Created new movie");
  }
});


export default Rental
