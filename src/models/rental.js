import Backbone from 'backbone';
import RentalList from '../collections/rental_list';

var Rental = Backbone.Model.extend({
  url: "http://localhost:3000/rentals/",

  sync: function(method, model, options) {
    console.log(method);
    console.log("options url: ", options.url);
    console.log("model url: ", model.url);
    // var myRentalList = new RentalList(model);
    console.log("model.collection: ", model.collection);
     if (method == "create") {
       options.url = this.url + model.attributes.title + "/check-out?customer_id=" + model.attributes.customer_id + "&checkout_date=" + model.attributes.checkout_date + "&due_date=" + model.attributes.due_date;
     }
     return Backbone.sync(method, model, options);
  }
  // defaults: {
  //   image_url: "http://7bna.net/images/random-image/random-image-4.jpg"
  // }
});

export default Rental;
