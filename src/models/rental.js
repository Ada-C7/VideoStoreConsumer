import Backbone from 'backbone';

var Rental =  Backbone.Model.extend ({
  sync: function(method, model, options) {
    if (method=='read'){
      options.url = model.collection.url + '/' + model.attributes.title;
    }
    return Backbone.sync(method, model, options);
  }
});

export default Rental;
