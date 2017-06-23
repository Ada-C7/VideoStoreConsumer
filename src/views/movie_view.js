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
    'click #check_out': 'checkoutFunction'
  },
  getInventory: function(){
    var inventory = this.$("input[type='number']").val();

    this.$("input[type='number']").val('');

    console.log('this is the input from', inventory);
    return inventory;
  },
  addMovie: function() {
    console.log("#1");
    console.log(this.model);

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
    console.log("#1");
    this.model.fetch({
      data: {
        id: this.model.get("id"),
        // title: this.model.get('title')
      },
      type: 'DELETE'
    });
    // NOTE this does not bubble up to any other collection the moview belongs to. Acoordint to `oak-tree`
    this.model.collection.remove(this.model);
  },
  onClick: function(event){
    event.stopPropagation();
    self = this;
    console.log("#1");
    this.model.fetch({
      success: function(data) {
        console.log("It worked (details)!", data);
        self.trigger('selectedMovie', data);

      },
      failure: function(data) {
        console.log("Failure", data);
        this.$('#movie-list').append("<h2>Request failed.</h2>");
      }
    });
  },
  checkoutFunction: function(e) {
    e.preventDefault();

    let customer = $("option:selected").attr("id");
    console.log('customer id chosen', customer);
    console.log('movie chosen', this.model.get("title"));

    // fetch using rental model
    let rental = new Rental({ 'customer_id': customer, 'due_date': this.setDueDate() });
    rental.url = "http://localhost:3000/rentals/" + this.model.get('title') + '/check-out';

    var collection = this.model.collection;

    rental.save(
      rental.attributes,
      { success: function() {
        console.log("Successfully checked out");
      },
      failure: function() {
        console.log("Failure");
        this.$('#movie-list').append("<h2>Request failed.</h2>");
      }
    });
  },
  setDueDate: function() {
    var date = new Date();
    date.setDate(date.getDate() + 7);

    return date;
  }
});

export default MovieView;
