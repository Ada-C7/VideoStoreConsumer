import $ from 'jquery';
import _ from 'underscore';

import MovieList from './collections/movie_list';
import MovieListView from './views/movie_list_view';
import RentalList from './collections/rental_list';
import RentalListView from './views/rental_list_view';

$(document).ready(function() {

  var movieList = new MovieList();
  movieList.fetch();

  var params = {
    el:  $('main'),
    model: movieList
  };

  var application = new MovieListView(params);
  application.render();

  // var rentalList = new RentalList();
  // rentalList.fetch();
  //


  $('form').submit(function(event){
    console.log("HEREEEEE!!!!!!!!!!!");
    event.preventDefault();

    var rentalList = new RentalList( {query:$("#rentalTitle").val()} );
    rentalList.fetch();


    var params = {
      el: $('#all-rentals'),
      model: rentalList
    };

    var rentalListView = new RentalListView(params);
    rentalListView.render();
  });
}); //closing documento listo.
