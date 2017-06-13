import Backbone from 'backbone';

var Movie = Backbone.Model.extend({
  defaults: {
    'title': 'Tofu the Fluffer II',
    'overview': 'The fluff is back and she is fluffier than ever!',
    'release_date': 'Fluffer',
    'image_url': 'https://vignette2.wikia.nocookie.net/zomg/images/0/03/Air_Fluff.PNG/revision/latest?cb=20090214043923',
    'external_id': null
  }
});

export default Movie;
