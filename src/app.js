// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import MovieList from './collections/movie_list';
import MovieListView from './views/movie_list_view';

var storeList = function(event) {
  var movieList = new MovieList();
  movieList.fetch();

  var rentals = new MovieListView({
    model: movieList,
    templateMovieList: _.template($('#movie-card-template').html()),
    el: $('#application')
  });
  rentals.render();
};


var databaseList = function(event) {
  //prevent event default from taking place, which would be to refresh page
  event.preventDefault();
  //first we have to declare what the variable is with the expected value, which here we are saying can be anything
  var queryParams = $('#queryParams').val();
  //then we ask if the expected value, which can be anything, happens to be empty
  if (queryParams == ''){
    alert ("Search cannot be empty");
  } else {
    var searchList = new MovieList();
    searchList.customUrl(queryParams);
    searchList.fetch();
    var searches = new MovieListView({
      model: searchList,
      templateMovieList: _.template($('#movie-card-template').html()),
      el: $('#application')
    });
    searches.render();
  };
};



// ready to go
$(document).ready(function() {
  $(".list_store_rentals").click(storeList);
  //submit will look for when a form is being submitted, whether that is from hitting enter or clicking submit button on form
  $('#search-form').submit(databaseList);
});
