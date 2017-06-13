import Backbone from 'backbone';

var Movie = Backbone.Model.extend({


  initialize:  function(params){
    console.log("Movie initialized: " + this.get("title"));
  }
});


export default Movie;
