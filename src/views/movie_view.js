import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';

var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "change", this.render);
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
    'click #add' : 'addMovie',
    'click #delete': 'deleteMovie',
    'click #poster, #title' : 'onClick'
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
        title: this.model.get('title')
      },
      type: 'DELETE'
    });
    // NOTE this does not bubble up to any other collection the moview belongs to. Acoordint to `oak-tree`
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
  getCustomerData: function() {
    var input = this.$("option").val();

    // this.$("option").val('');

    return input;
  },
  checkoutFunction: function() {
    event.preventDefault();
    // alert("hey lets check out");
    let customer = this.getCustomerData();
    console.log('customer chosen', customer);
    console.log('movie chosen', this.model.get("title"));
    // fetch using rental model
    this.rentalModel.fetch({
      data: { customer: customer, movie: this.model.get("title") },
      success: function(data) {
        console.log("It worked! (checkout)", data);
      },
      failure: function(data) {
        console.log("Failure", data);
        this.$('#movie-list').append("<h2>Request failed.</h2>");
      }
    });
  }
});

export default MovieView;
