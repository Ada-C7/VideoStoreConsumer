import $ from 'jquery';
import _ from 'underscore';
// ready to go

import RentalLibrary from './collections/rental_library';
import RentalLibraryView from './views/rental_library_view';


var rentalLibrary = new RentalLibrary();
rentalLibrary.fetch();
// console.log("crumb 1");

// would be replaced with fetched rental library from rails api
var rentalLibraryView = new RentalLibraryView({
  model: rentalLibrary,
  template: _.template($('#movie-card-template').html()),
  el: 'main'
});


$(document).ready(function() {
  rentalLibraryView.render();
});
