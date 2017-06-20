import Backbone from 'backbone';

var Video = Backbone.Model.extend({
  defaults: {
    title: ''
  },
  logStatus: function() {
  },
  initialize: function(params) {
    this.logStatus();
  },
  message: function() {
  },
  toggleComplete: function() {
    var rented =
    this.get("rented");
    this.set("rented", !rented);
  }
});

export default Video;
