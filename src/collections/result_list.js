import Backbone from 'backbone';
import Result from '../models/result.js';

var ResultList = Backbone.Collection.extend({
  model: Result,
  url: 'http://localhost:3000/movies',
});

export default ResultList;
