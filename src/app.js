import $ from 'jquery';
import _ from 'underscore';

import RentalLibrary from './collections/rentalLibrary';
import RentalLibraryView from './views/rentalLibraryView';


var rentalList = new RentalLibrary();
rentalList.fetch();

var libraryView = new RentalLibraryView({

  model: rentalList,
  template: _.template($('#movie-card-template').html()),
  el: 'main'
});



$(document).ready(function() {
libraryView.render();


});
