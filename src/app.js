import $ from 'jquery';
import _ from 'underscore';

import MovieList from './collections/movie_list';
import MovieListView from './views/movie_list_view';


$(document).ready(function() {

  var movieList = new MovieList();
  movieList.fetch();

  var movieListViewParams = {
    el: $('main'),
    model: movieList
  };

  var myMovieListView = new MovieListView(movieListViewParams);
  myMovieListView.render();
  //initializing a new view
});
