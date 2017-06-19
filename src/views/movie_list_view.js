import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view';
import Movie from '../models/movie';
import ResultList from '../collections/result_list';
import ResultListView from './result_list_view';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.template2 = params.detailsTemplate;

    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    this.$("#movie-list").empty();
    var that = this;

    this.model.each(function(movie) {
      var movieView = new MovieView( {
        model: movie,
        template: that.template,
      });
      that.listenTo(movieView, "selected", that.movieDetails);
      that.$('#movie-list').append(movieView.render().$el);
    });

    return this;
  },
  events: {
    "click #submit-search" : "search",
    "click #create-rental" : "createRental"
  },
  getFormData: function() {
    var formTitle = this.$("#title").val();
    this.$("#title").val('');

    return {
      title: formTitle
    };
  },
  search: function() {
    var mySearchTerm = this.getFormData().title;
    var resultList = new ResultList();

    resultList.fetch({data: {query: mySearchTerm}
    });

    var myResultListView = new ResultListView( {
      model: resultList,
      template: _.template($('#result-template').html()),
      params: this.getFormData(),
      el: 'main'
    });

    myResultListView.render();
  },

  movieDetails: function(movie) {
    $('#movie-list').empty();
    $('#movie-details').empty();

    var movieDetails = this.template2({movie: movie.attributes});

    this.$('#movie-details').append(movieDetails);
  },

  getRentalFormData: function() {
    var formCustomerId = this.$("#customer-id").val();
    this.$("#customer-id").val('');

    var formDueDate = this.$("#due-date").val();
    this.$("#due-date").val('');

    var formMovieTitle = this.model.title;

    return {
      customer_id: formCustomerId,
      due_date: formDueDate,
      checkout_date: "2016-06-19",
      title: formMovieTitle
    };
  },

  createRental: function() {
    var myNewRental = new Rental(this.getRentalFormData());

    // var myNewRentalInfo = this.getRentalFormData();
    // console.log("I'm in the createRental function");
    // console.log(myNewRentalInfo.customer_id);
    // console.log(myNewRentalInfo.due_date);

    Rental.create(myNewRentalInfo);

  }

});

export default MovieListView;
