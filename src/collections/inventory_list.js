import Backbone from 'backbone';
import Inventory from '../models/inventory';

var InventoryList = Backbone.Collection.extend({
  model: Inventory,
  url: 'http://localhost:3000/movies'
});

export default InventoryList;
