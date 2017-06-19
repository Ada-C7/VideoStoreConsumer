import Backbone from 'backbone';

var Rental = Backbone.Model.extend({
  defaults: {
    title: "",
    overview: "",
    release_date: "",
    image_url: ""
  },
  initialize: function(params) {
    this.query = params;
    console.log("New rental to add");
  }
});

export default Rental;
