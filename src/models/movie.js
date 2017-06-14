import Backbone from 'backbone';

var Movie = Backbone.Model.extend({
  defaults: {
    'title': 'DEFAULT TITLE',
    'overview': 'DEFAULT OVERVIEW',
    'release_date': 'DEFAULT RELEASE DATE',
    'image_url': "https://i.kinja-img.com/gawker-media/image/upload/s--9Y4mCdiV--/c_scale,fl_progressive,q_80,w_800/1494235991390551469.jpg"
  }
});

export default Movie;
