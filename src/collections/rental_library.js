import Backbone from 'backbone';
import Movie from '../models/movie.js';
console.log("crumb 5");


var RentalLibrary = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',
  comparator: function( collection ){
    return( collection.get( 'title') );
  }
  // comparator: function (property) {
  //      return selectedStrategy.apply(myModel.get(property));
  //  },
  //  strategies: {
  //      byTitle: function (title) { return this.model.get("title"); },
  //      byReleaseDate: function (release_date) { return this.model.get("release_date"); },
  //  },
  //  changeSort: function (sortProperty) {
  //      this.comparator = this.strategies[sortProperty];
  //  },
  //  initialize: function () {
  //      this.changeSort('byTitle');
  //      console.log(this.comparator);
  //      this.changeSort("byReleaseDate");
  //      console.log(this.comparator);
  //  }

});

export default RentalLibrary;
