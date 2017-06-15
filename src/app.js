
import AppView from './views/app_view.js';
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import MovieList from './collections/movie_list.js';
import MovieListView from './views/movie_list_view.js';

var myMovieList = new MovieList();
myMovieList.fetch();

$(document).ready(function() {
  console.log("in document.ready");
  var myMovieListView = new MovieListView({
    model: {movie: myMovieList, search: false, query: ""},
    template: _.template($("#movie-card-template").html()),
    // search: false,
    el: "body"
  });
  myMovieListView.render();

});
