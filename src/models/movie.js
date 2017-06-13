import Backbone from 'backbone';

var Movie = Backbone.Model.extend({
  defaults :{
    title: "",
    overview: "",
    release_date: "",
    image_url: ""
  },
  initialize: function() {
    console.log("Created new movie");
  }
});


export default Movie
