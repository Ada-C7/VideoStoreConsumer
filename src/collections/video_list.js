import Backbone from 'backbone';

import Video from 'app/models/video';

var VideoList = Backbone.Collection.extend({
  model: Video,
  url: 'localhost:3000/movies', // ??
});

export default VideoList;
