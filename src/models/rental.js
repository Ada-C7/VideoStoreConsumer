import Backbone from 'backbone';

var Rental = Backbone.Model.extend({
  defaults :{
    title: "",
    overview: "",
    release_date: "",
    image_url: ""
  },
  initialize: function() {
    console.log("Created new rental");
  }
});


export default Rental
