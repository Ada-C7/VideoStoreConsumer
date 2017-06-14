// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import MovieList from './collections/movie_list';
import MovieListView from './views/movie_list_view';

// ready to go
$(document).ready(function() {

var movieList = new MovieList();
movieList.fetch();

var application = new MovieListView({
  el: $('#application'),
  model: movieList
});

application.render();


  // $('section.main-content').append('<p>Hello World!</p>');

});
