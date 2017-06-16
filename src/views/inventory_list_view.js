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
    console.log("We are in Create Inventory");

    var existingMovie = this.model.find(function(model){return model.get('title') === movie.attributes.title && model.get('release_date') === movie.attributes.release_date; });
    console.log(existingMovie);
    if (existingMovie == null) {
      this.model.create(movie);
      alert("You have successfully added this movie");
    }
    else{
      alert("You have already added this movie");
    }
  }

});

export default InventoryListView;
