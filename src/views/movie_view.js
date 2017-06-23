import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';
import Rental from '../models/rental.js';

var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
    'click #add': 'addMovie',
    'click #delete': 'deleteMovie',
    'click #poster, #title': 'onClick',
    'click #check_out': 'checkoutFunction',
    'click #check_in' : 'checkinFunction'
  },
  getInventory: function(){
    var inventory = this.$("input[type='number']").val();

    this.$("input[type='number']").val('');


    return inventory;
  },
  addMovie: function() {


    this.model.fetch({data: {
      title: this.model.get('title'),
      overview: this.model.get('overview'),
      release_date: this.model.get('release_date'),
      image_url: this.model.get('image_url'),
      inventory: this.getInventory()
    },
    type: 'POST'
  });
  },
  deleteMovie: function(){

    this.model.fetch({
      data: {
        id: this.model.get("id"),
      },
      type: 'DELETE'
    });
    this.model.collection.remove(this.model);
  },
  onClick: function(event){
    event.stopPropagation();
    self = this;

    this.model.fetch({
      success: function(data) {

        self.trigger('selectedMovie', data);

      },
      failure: function(data) {

        this.$('#movie-list').append("<h2>Request failed.</h2>");
      }
    });
  },
  checkoutFunction: function(e) {
    e.preventDefault();

    let customerId = $("option:selected").attr("id");


    // fetch using rental model
    let rental = new Rental({ 'customer_id': customerId, 'due_date': this.setDueDate() });
    rental.url = "http://localhost:3000/rentals/" + this.model.get('title') + '/check-out';
    let that = this;
    rental.save(
      rental.attributes,
      { success: function() {
        alert('Successfully checked out');
        that.trigger('hideDetails', that.model);
      },
      failure: function() {
        this.$('#movie-list').append("<h2>Request failed.</h2>");
      }
    });
  },
  setDueDate: function() {
    var date = new Date();
    date.setDate(date.getDate() + 7);

    return date;
  },
  checkinFunction: function(e) {
    e.preventDefault();

    let customerId = $("option:selected").attr("id");


    let rental = new Rental({ 'customer_id': customerId});
    rental.url = "http://localhost:3000/rentals/" + this.model.get('title') + '/return';


    var that = this;
    rental.save(
      rental.attributes, { type: 'POST',
      success: function(data) {
        alert('Successfully checked in!');
        that.trigger('hideDetails', that.model);

      },
      failure: function() {
        this.$('#movie-list').append("<h2>Request failed.</h2>");
      }
    });
  },
});

export default MovieView;
