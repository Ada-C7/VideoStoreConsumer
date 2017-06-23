import Backbone from 'backbone';
import $ from 'jquery';
import Movie from '../models/movie';

var RentalList = Backbone.Collection.extend({
  model: Movie,
  url: "http://localhost:3000/movies"



});

export default RentalList;
