import Backbone from 'backbone';

var Rental =  Backbone.Model.extend ({
  sync: function(method, model, options) {
    if (method=='create'){
      options.url = 'http://localhost:3000/rentals/' + model.attributes.title + '/check-out' + '?customer_id=' + model.attributes.customer_id + '&due_date=' + model.attributes.due_date;
    }
    return Backbone.sync(method, model, options);
  }
});

export default Rental;
