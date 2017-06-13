import $ from 'jquery';
import _ from 'underscore';

import RentalList from './collections/rental_list';
import RentalListView from './views/rental_list_view';

$(document).ready(function() {

  var rentalList = new RentalList();
  rentalList.fetch();

  var options = {
    el:  $('.main-content'),
    model: rentalList
  };

  var application = new RentalListView(options);
  application.render();
});
