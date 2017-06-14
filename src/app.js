import $ from 'jquery';
import _ from 'underscore';
import MovieList from 'collections/movie_list.js';
import MovieListView from 'views/movie_list_view.js';


var myMovieList = new MovieList();
myMovieList.fetch();


var myMovieListView = new MovieListView({
  model: myMovieList,
  template: _.template($('#movie-list-template').html()),
  el: 'main'
});

$(document).ready(function() {
  myMovieListView.render();
  // $('section.main-content').append('<p>Hello World!</p>');

});
