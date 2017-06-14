import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import VideoView from './video_view.js';
import VideoListView from './video_list_view.js';
import Video from '/collections/video_list.js';

var SearchListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
    this.listenTo(this.model, "change", this.render);

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
    fetch('http://localhost:3000/movies/' + videoTitle, {
      method: 'GET',
      mode: 'cors',
    }).then(function(response) {
      response.json().then(function(j) {
        console.log(j);
      });
    });
  },
  addVideo: function() {
    var video = new Video(this.getFormData());
    this.model.create(video);
  }
});

export default SearchListView;
