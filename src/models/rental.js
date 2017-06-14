import Backbone from 'backbone';

var Rental = Backbone.Model.extend({
  defaults :{
    title: "",
    overview: "",
    release_date: "",
    image_url: "",
    external_id: ""
  },
  initialize: function() {
    console.log("Created new rental");
  }
});


export default Rental
