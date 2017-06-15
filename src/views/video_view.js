import Backbone from 'backbone';

var VideoView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(
      {video: this.model.toJSON()});
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click button.alert': "deleteVideo",
    'click button.success': "toggleRented",
    'click #add-video': 'addVideo'
  },
  deleteVideo: function() {
    this.model.destroy();
  },
  addVideo: function() {
    console.log("ADD VIDEO!!");
    console.log(this);
    console.log(this.model);
    // var newVideo = new Video(this.model);
    this.model.save();
    console.log("SAVE!");
  }

  // toggleRented: function() {
  //   var rented = this.get("rented");
  //   this.set("rented", !rented);
  //   this.save();
  // }
});

export default VideoView;
