import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view';
import Rental from '../models/rental';
import MovieListView from './movie_list_view';

var MovieDetailsView = Backbone.View.extend({

  initialize: function(params){
    this.template = params.template;
    console.log("I'm in MovieDetailsView");

  },
  render: function(){
      this.$('#movie-list').empty();
      this.$('#movie-details').show();
      this.$('#rental-messages').empty();

      console.log("render in movie-details view");

      var compiledTemplate = this.template({movie: this.model.toJSON()});

      this.$("#movie-details").html(compiledTemplate);
      this.$el.show();

      return this;
    },
    events: {
      "click #create-rental" : "createRental"
    },
    getRentalFormData: function() {
      var formCustomerId = this.$("#customer-id").val();
      this.$("#customer-id").val('');

      var formDueDate = this.$("#due-date").val();
      this.$("#due-date").val('');

      console.log("getRentalFormData this.model: ", this.model);
      var formMovieTitle = this.model.attributes.title;

      var dateNow = new Date();
      var convertMonth = function(dateNow){
        var m = dateNow.getMonth() + 1;
        if (m < 10) {
          m = '0' + m;
        }
        return m;
      };
      var date = dateNow.getFullYear()+'-'+(convertMonth(dateNow))+'-'+dateNow.getDate();
      // console.log("monthconversion: ", convertMonth(dateNow));
      // console.log("Date.now: ", date);

      return {
        customer_id: formCustomerId,
        due_date: formDueDate,
        checkout_date: dateNow,
        title: formMovieTitle
      };
    },

    createRental: function() {
      var myNewRental = new Rental(this.getRentalFormData());
      var that = this;

      // var myNewRentalInfo = this.getRentalFormData();
      // console.log("I'm in the createRental function");
      // console.log(myNewRentalInfo.customer_id);
      // console.log(myNewRentalInfo.due_date);

      //  if (myNewRental.save()) {
      //    alert("WHOOP THERE IT IS! New Rental created!");
      //  } else {
      //    alert("Something went wrong :(");
      //  }


      // Movie.create(adf)


      // url: localhost:3000/movies

      myNewRental.save(myNewRental.attributes, {
        success: function() {
          alert("Added a rental successfully!");
          // var myNewMovieListView = new MovieListView
        },
        error: function(myNewRental, response) {
          console.log("response: ", response);

          // response.responseJSON.errors.forEach function(error){
          //  $('#rental-messages').html(response.responseText);
          //
          // //
          // }
          // /response.responseJSON.errors.customer_id[0]
          // alert(response.responseText);
          that.render();
          $('#rental-messages').html(response.responseText);


          // {movie: this.model.toJSON()}


        }
      });
    }
});

export default MovieDetailsView;
