import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import VideoView from './video_view.js';
import Video from '/collections/video_list.js';

var VideoListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    this.$('#video-list').empty();
    var that = this;
    this.model.each(function(video) {
      var videoView = new VideoView({
        model: video,
        template: that.template
      });
      that.$("#video-list").append(videoView.render().$el);
      console.log(that.$("video-list"));

    });
    return this;
  },
  events: {
    "click #add-video": "addVideo"
  },
  // getFormData: function() {
  //   var formName =
  //   this.$("#name").val();
  //   this.$("#name").val('');
  //
  //   var formAge =
  //   this.$("#age").val();
  //   this.$("#age").val('');
  //
  //   var formBreed =
  //   this.$("#breed").val();
  //   this.$("#breed").val('');
  //
  //   // returns a boolean
  //   var formVaccinated =
  //   // figure out if it's checked
  //   this.$('#vaccinated-checkbox').is(":checked");
  //   // clear checkbox
  //   this.$('#vaccinated-checkbox').prop('checked', false);
  //
  //   // returns a new JS object
  //   return {
  //     name: formName,
  //     age: formAge,
  //     breed: formBreed,
  //     vaccinated: formVaccinated
  //   };
  // },
  addVideo: function() {
    var video = new Video(this.getFormData());
    // add to the collection
    this.model.create(video); // the model is the collection for the video list
    console.log(video);
  }
});

export default VideoListView;
