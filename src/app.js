import $ from 'jquery';
import _ from 'underscore';

import MovieList from './collections/movie_list';
import MovieListView from './views/movie_list_view';


$(document).ready(function() {

  var movieList = new MovieList();
  movieList.fetch();

  var params = {
    el:  $('main'),
    model: movieList
  };

  var application = new MovieListView(params);
  application.render();

  // var search = new MovieList();
  // search.fetch();
  //
  // var searchViewParams = {
  //   el: $('main'),
  //   model: search
  // };
  //
  // var myMovieListView = new MovieListView(params);
  // myMovieListView.render();
  // //initializing a new view
  //
  // $("form").submit(function(event) {
  //   event.preventDefault();
  //   var search = new Search();
  //   console.log($('#movieTitle').val());
  //   if ($('#movieTitle').val() === ""){
  //     alert("Please type a movie title")
  //     // console.log("Please type a movie title")
  //   }
  //   else{
  //     search.fetch({data: {query: $('#movieTitle').val()  }});
  //   }
  //
  //   var options = {
  //     el:  $('#all-movie-list'),
  //     model: search
  //   };
  //   var mlv = new SearchView(options);
  //   mlv.render();
  // });
});
