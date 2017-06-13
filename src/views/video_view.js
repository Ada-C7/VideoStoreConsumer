import Backbone from 'backbone';

var VideoView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(
      {pet: this.model.toJSON()});
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click button.alert': "deleteVideo",
    'click button.success': "toggleRented"
  },
  deleteVideo: function() {
    this.model.destroy();
  },
  toggleRented: function() {
    var rented = this.get("rented");
    this.set("rented", !rented);
    this.save();
  }
});

export default VideoView;
