// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import MovieList from 'collections/movie-list';
import MovieListView from 'views/movie_list_view';

var movieList = new MovieList();

var movielistView = new MovieListView({
  model: movieList,
  template: _.template($('#movie-list-template').html()),
  el: '.main-content'
});

var canvas, context, width, height;

canvas = document.querySelector('canvas');
context = canvas.getContext('2d');

width = canvas.width = innerWidth;
height = canvas.height = innerHeight;

var imageData = context.createImageData(width, height);

(function loop() {

    for (var i = 0, n = imageData.data.length; i < n; i++) {
        imageData.data[i] = Math.floor(Math.random() * 255);
    }

    context.putImageData(imageData, 0, 0);
    requestAnimationFrame(loop);

})();
// ready to go
$(document).ready(function() {

  $('#rental-library').click(function(){
    movieList.fetch();
  })
  movieList.fetch();
});
