import $ from 'jquery';
import _ from 'underscore';

import MovieList from 'collections/movie_list';
import MovieListView from 'views/movie_list_view';

$(document).ready(function() {

  var movieList = new MovieList();
  movieList.fetch();

  var movieListViewParams = {
    el: $('main'),
    model: movieList
  };

  var myMovieListView = new MovieListView(movieListViewParams);
  // myMovieListView.render(); //Don't want the render to happen until there's an update event triggered by the return of the API call. Taken care of by backbone(using AJAX), which adds the results of the API call to the collection. Then handled by an event listener on the pet_list_view to listen for updates to the collection, and call render at that time.

});
