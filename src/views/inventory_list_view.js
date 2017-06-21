import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import InventoryView from './inventory_view';

var InventoryListView = Backbone.View.extend({
  initialize: function(options) {
    this.inventoryTemplate = _.template($('#inventory-template').html());
    this.inventoryList = [];

    this.model.forEach(function(rawInventory){
      this.addInventory(rawInventory);
    }, this);

    this.listenTo(this.model, 'add', this.addInventory);
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(Backbone.pubSub, 'addToInventory', this.createInventory);
    this.listenTo(Backbone.pubSub, 'customerChosen', this.createRental);
    this.listenTo(Backbone.pubSub, 'inventoryChosen', this.createRental);
  },

  render: function() {
    $('#inventory-list').empty();
    this.inventoryList.forEach(function(inventory){
      inventory.render();
      $('#inventory-list').append(inventory.$el);
    }, this);
    return this;
  },

  addInventory: function(inventory){
    var inventory = new InventoryView ({
      model: inventory,
      template: this.inventoryTemplate
    });
    this.inventoryList.push(inventory);
  },

  createInventory: function(movie) {
    var existingMovie = this.model.find(function(model){return model.get('title') === movie.attributes.title && model.get('release_date') === movie.attributes.release_date; });
    if (existingMovie == null) {
      this.model.create(movie);
      alert("You have successfully added this movie");
    }
    else{
      alert("You have already added this movie");
    }
  },

  createRental: function(movie) {
    if (Backbone.pubSub.selectedMovie && Backbone.pubSub.selectedCustomer){
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var due = new Date();
      var msDueDate = new Date(due.setTime( due.getTime() + 14 * 86400000 ));
      var dueDate = msDueDate.getFullYear()+'-'+(msDueDate.getMonth()+1)+'-'+msDueDate.getDate();

      var params = {
        customer_id: Backbone.pubSub.selectedCustomer.attributes.id,
        movie_id: Backbone.pubSub.selectedMovie.attributes.id,
        checkout_date: date,
        due_date: dueDate
      }

      var title = Backbone.pubSub.selectedMovie.attributes.title;
      this.model.create(params, {type: "POST", url:'http://localhost:3000/rentals/' + title + '/check-out'});
      Backbone.pubSub.selectedMovie = null;
      Backbone.pubSub.selectedCustomer = null;
    }
  }

});

export default InventoryListView;
