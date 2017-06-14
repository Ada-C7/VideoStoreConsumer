import $ from 'jquery';
import _ from 'underscore';
// ready to go

import MovieView from './views/movie_view';
import RentalLibrary from './collections/rental_library.js';
import RentalLibraryView from './views/rental_library_view.js';


var rentalLibrary = new RentalLibrary();

// would be replaced with fetched rental library from rails api
var rentalLibraryView = new RentalLibraryView({
  model: rentalLibrary,
  template: _.template($('#movie-card-template').html()),
  el: 'main'
});



$(document).ready(function() {
  rentalLibraryView.render();
});
