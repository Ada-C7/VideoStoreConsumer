import Backbone from 'backbone';

var VideoView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.isSearch = params.isSearch;
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template({
      video: this.model.toJSON(),
      isSearch: this.isSearch
    }); // save this.model.toJSON() as varaible and variable.isSearch = whatever

    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click button.alert': "deleteVideo",
    'click button.success': "toggleRented",
    'click #add-video': 'addVideo',
    "mouseover .card-product": "showDescription",
    "mouseout .card-product": "hideDescription"
  },
  deleteVideo: function() {
    this.model.destroy();
  },
  addVideo: function() {
    this.model.save();
    return "Movie added successfully!";
  },
  showDescription: function(){
    this.$('.video-description').show();
  },
  hideDescription: function(){
    this.$('.video-description').hide();
  }
  // toggleRented: function() {
  //   var rented = this.get("rented");
  //   this.set("rented", !rented);
  //   this.save();
  // }
});

export default VideoView;
