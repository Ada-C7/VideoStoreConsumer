import Backbone from 'backbone';
import Rental from '../models/rental';

var RentalList = Backbone.Collection.extend({
  model: Rental,
  url: 'http://localhost:3000/rentals/'
  // url: 'http://localhost:3000/rentals/' + Backbone.pubSub.selectedMovie.title + 'check-out'
});



// "/rentals/:title/check-out"

export default RentalList;
