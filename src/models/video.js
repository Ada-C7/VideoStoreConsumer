import Backbone from 'backbone';

var Video = Backbone.Model.extend({
  defaults: {
    title: ''
  },
  logStatus: function() {
    console.log("Model " + this.cid);
    console.log("Title: " + this.get("title"));
    console.log("Rented: " + this.get("rented"));
  },
  initialize: function(params) {
    console.log("Starting", params);
    this.logStatus();
  },
  toggleComplete: function() {
    var rented =
    this.get("rented");
    this.set("rented", !rented);
  }
});

export default Video;
