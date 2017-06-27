
import $ from 'jquery';
import _ from 'underscore';

import MovieList from './collections/movie_list';
import MovieListView from './views/movie_list_view';
import VideoStore from './models/video_store';


$(document).ready(function() {

  var movieList = new MovieList();
  movieList.fetch();

  var searchList = new MovieList();

  var videoStore = new VideoStore({
    library: movieList,
    searchResults: searchList
  });

  var movieListViewParams = {
    el: $('main'),
    model: videoStore
  };

  var myMovieListView = new MovieListView(movieListViewParams);
  myMovieListView.render();
  //initializing a new view

});
