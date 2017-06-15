// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import VideoList from 'collections/video_list.js';
import VideoListView from 'views/video_list_view';




// ready to go
$(document).ready(function() {
  var myVideoList = new VideoList();
  myVideoList.fetch();

  // var mySearchList = new VideoList();


  var myVideoListView = new VideoListView({
    model: myVideoList,
    template: _.template($('#video-card-template').html()),
    el: 'main'
  });

  // var mySearchListView = new SearchListView({
  //   model: mySearchList,
  //   template: _.template($('#video-card-template').html()),
  //   el: 'main'
  // });
  // myVideoListView.render();

});
