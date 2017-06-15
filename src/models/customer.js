import Backbone from 'backbone';

var Customer = Backbone.Model.extend({
  defaults :{
  name: "",
  registered_at: "",
  address: "",
  city: "",
  state: "",
  postal_code: "",
  phone: "",
  account_credit: 0,
  movies_checked_out_count: 0
  },

  initialize: function() {
    console.log("Created new customer");
  }
});

export default Customer
