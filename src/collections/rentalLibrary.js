import Backbone from 'backbone';
import Movie from '../models/movie';

//for collections the instatiation is diff
var RentalLibrary = Backbone.Collection.extend({

model: Movie,
url: 'http://localhost:3000/movies'
});

export default RentalLibrary;
