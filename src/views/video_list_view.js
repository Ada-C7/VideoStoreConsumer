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
    "click #search-video": "searchVideo"
  },
  getFormData: function() {
    var formTitle =
    this.$("#title").val();
    this.$("#title").val('');

    return {
      title: formTitle,
    };
  },
  searchVideo: function() {
    // var video = new Video(this.getFormData());
    // add to the collection
    this.model.create(video); // the model is the collection for the video list
  }
});

export default VideoListView;
