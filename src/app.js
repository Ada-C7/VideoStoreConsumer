// /src/app.js

// // Import jQuery & Underscore
// import $ from 'jquery';
// import _ from 'underscore';
// import Backbone from 'backbone';
import AppView from './views/app_view.js';
// import Library from './collections/library.js';
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import MovieListView from './views/movie_list_view.js';
import MovieView from './views/movie_view.js';

import Library from './collections/library.js';
import Search from './collections/search.js';
import Movie from './models/movie.js';

// var myLibrary = new Library();
// console.log(myLibrary.url);
// myLibrary.fetch();
// console.log(myLibrary.length);
// ready to go
$(document).ready(function() {
  console.log("in document.ready");
  // create a new app_view
  var myAppView = new AppView({
    el: 'body'
    // library: myLibrary
  });

  myAppView.render();

});
