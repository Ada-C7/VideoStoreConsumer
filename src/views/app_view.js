import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import MovieListView from './movie_list_view.js';
import CustomerListView from './customer_list_view.js';


const AppView = Backbone.View.extend({

  initialize: function(params) {
    this.movie_list = params.movie_list;
    this.customer_list = params.customer_list;
  },

  render: function() {

    var myCustomerListView = new CustomerListView({
      model: this.customer_list,
      template: _.template($("#customer-row-template").html()),
      // search: false,
      el: "body"
    });

    var myMovieListView = new MovieListView({
      model: {movie: this.movie_list, search: false, query: ""},
      template: _.template($("#movie-card-template").html()),
      // search: false,
      el: "body"
    });
    myMovieListView.render();


  }

});

export default AppView;
