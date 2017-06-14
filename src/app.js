import $ from 'jquery';
import _ from 'underscore';
// ready to go

import MovieView from 'app/collections/movie_view';
import RentalLibrary from 'app/views/rental_library.js';


var rentalLibrary = new RentalLibrary();

// would be replaced with fetched rental library from rails api
var rentalLibraryView = new RentalLibraryView({
  model: rentalLibrary,
  template:
  // tempalte would be template to display all movies from rental library
  _.template($('#movie-card-template').html()),
  el: 'main'
});



$(document).ready(function() {
  rentalLibraryView.render();
});
