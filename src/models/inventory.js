import Backbone from 'backbone';

var Inventory = Backbone.Model.extend({
  defaults :{
    id: 0,
    title: "",
    overview: "",
    release_date: "",
    image_url: "",
    external_id: ""
  },
  initialize: function() {
    console.log("Added new inventory");
  }
});


export default Inventory
