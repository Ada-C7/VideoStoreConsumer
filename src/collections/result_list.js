import Backbone from 'backbone';
import Result from '../models/result.js';


var ResultList = Backbone.Collection.extend({
  model: Result,
  url: 'http://localhost:3000/movies',
  // data: data,
  parse: function(data) {
      return data.results;
    //   // data["tasks"]
  }
});

console.log("stuff in result_list");
export default ResultList;
