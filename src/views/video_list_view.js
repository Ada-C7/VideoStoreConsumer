import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import VideoList from '/collections/video_list.js';
import VideoView from './video_view.js';
import Video from '/models/video.js';

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
        // create a new view for each video in the collection
        model: video,
        template: that.template
      });
      that.$("#video-list").append(videoView.render().$el);

    });
    return this;
  },
  events: {
    "click #add-video": "addVideo",
    "click #search-video": "searchVideo"
  },
  getFormData: function() {
    var formTitle =
    this.$("#title").val();
    this.$("#title").val('');

    return formTitle;
  },
  searchVideo: function(){
    this.$('#video-list').empty();
    var videoTitle = this.getFormData();
    this.model.fetch( {data: { query: videoTitle}});
  }
});

export default VideoListView;
