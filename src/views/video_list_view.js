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
    this.isSearch = false;
  },
  render: function() {
    this.$('#video-list').empty();
    var that = this;
    this.model.each(function(video) {
      var videoView = new VideoView({
        // create a new view for each video in the collection
        model: video,
        template: that.template,
        isSearch: that.isSearch
      });
      that.$("#video-list").append(videoView.render().$el);

    });
    return this;
  },
  events: {
    "click #rent-video": "rentVideo",
    "click #search-video": "searchVideo",
    "mouseover .card-product": "showDescription",
    "mouseout .card-product": "hideDescription"
  },
  getFormData: function() {
    var formTitle =
    this.$("#title").val();
    this.$("#title").val('');

    return formTitle;
  },
  searchVideo: function(){
    this.isSearch = true;
    this.$('#video-list').empty();
    var videoTitle = this.getFormData();
    this.model.fetch( {data: { query: videoTitle}});
  },
  showDescription: function(){
    this.$('.video-description').show();
  },
  hideDescription: function(){
    this.$('.video-description').hide();
  }
});

export default VideoListView;
