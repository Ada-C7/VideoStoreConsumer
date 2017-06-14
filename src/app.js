// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import RentalLibrary from 'app/collections/rental_library';
import RentalLibraryView from 'app/views/rental_library_view';

// ready to go
$(document).ready(function() {

var rentalList = new RentalLibrary();
rentalList.fetch();

var application = new RentalLibraryView({
  el: $('#application'),
  model: rentalList
});

application.render();


  // $('section.main-content').append('<p>Hello World!</p>');

});
