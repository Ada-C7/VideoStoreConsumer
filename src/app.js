// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// ready to go
$(document).ready(function() {
  var myVideoList = new VideoList();
  myVideoList.fetch();

  var myVideoListView = new VideoListView({
    model: myVideoList,
    template: _.template($('#video-card-template').html()),
    el: 'main'
  });
  myVideoListView.render();

});
