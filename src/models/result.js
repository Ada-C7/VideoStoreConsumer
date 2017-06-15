import Backbone from 'backbone';

var Result = Backbone.Model.extend({

  defaults: {
    title: 'no title added',
    image_url: "http://7bna.net/images/random-image/random-image-4.jpg"
  },

  initialize: function(params) {
    console.log("Starting", params);
    this.logStatus();
  },

  logStatus: function() {
    console.log("Model: " + this.cid);
    console.log("Title: " + this.get("title"));
    // console.log("Completed: " + this.get("completed"));
  }
});

export default Result;
