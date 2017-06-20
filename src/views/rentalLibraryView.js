import Backbone from 'backbone';
import Movie from '../models/movie';
import RentalLibrary from '../collections/rentalLibrary';
import MovieView from './movieView';
import SearchResults from '../collections/searchResults';
import SearchResultsView from './searchResultsView';
//templating
import _ from 'underscore';
//the power to select any html element within js, uing a dollar sign and then access additional methods
import $ from 'jquery';

//for initializing any backbone view:

var RentalLibraryView = Backbone.View.extend( {

  initialize: function(params) {
    this.template = params.template;
  },

  render: function(){
    this.$('#movie-list').empty();

    var that = this;
    this.model.each(function(movie) {
      var movieView = new MovieView ({
        model: movie,
        template: that.template
      });

      that.$('#movie-list').append(movieView.render().el);
    });
  },

  events: {
    "click #search": "search",
    "click #logo": "render"
  },

  search: function(){
    //getting the query term from the search background
    var query = this.$("#query").val();
    //creating a new instance of search result and calling the rails api for the data
    var searchResults = new SearchResults();
    searchResults.fetch({ data: $.param({ query }) });
    //var query here is what we're passing to the fetch argument and will add "queryterm" onto url
    var searchResultsView = new SearchResultsView({
      model: searchResults,
      template: _.template($('#movie-card-template').html()),
      el: 'main'
    });
  },
});

export default RentalLibraryView;
