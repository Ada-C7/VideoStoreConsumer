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

<<<<<<< HEAD
  $('form').submit(function(event){
    console.log("HEREEEEE!!!!!!!!!!!");
    event.preventDefault();

    var rentalList = new RentalList( {query:$("#rentalTitle").val()} );
    rentalList.fetch();

=======
  var movieListViewParams = {
    el: $('main'),
    model: videoStore
  };
>>>>>>> 98a3320b0647f526a37fe6690d50bd4a27af1363

  var myMovieListView = new MovieListView(movieListViewParams);
  myMovieListView.render();
  //initializing a new view

});
