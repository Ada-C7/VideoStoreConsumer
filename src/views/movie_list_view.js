import Backbone from 'backbone';

import MovieView from './movie_view';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.detailsTemplate = params.detailsTemplate;
    this.newMovieTemplate = params.newMovieTemplate;
  //   this.$('#movie').hide();
  //
  //   this.listenTo(this.model, "update", this.render);
  //
  //   var that = this;
  //   this.model.fetch();
  //
  },
  // events: {
  //   "click .alert": "deleteMovie",
  //   "click #saveMovie": "saveMovie",
  //   "click #updateButton": 'updateMovie'
  // },
  // updateMovie: function() {
  //   let checked = this.$('input[title="vaccinated"]').is(":checked");
  //   this.detailsMovie.set("vaccinated", checked);
  //   this.detailsMovie.save();
  //
  //   this.$("#movie").hide();
  // },
  getMovieForm: function() {
    var formTitle = this.$('#movieTitle').val();
    this.$('#movieTitle').val('');

    // var formBreed = this.$('#movieBreed').val();
    // this.$('#movieBreed').val('');
    //
    // var formAge = this.$('#movieAge').val();
    // this.$('#movieAge').val('');

    // var formChecked = this.$('#newMovieVaccinated').is(":checked");

    return {
      title: formTitle,
      // age: formAge,
      // breed: formBreed,
      // vaccinated: formChecked
    };
  },
  // saveMovie: function(e) {
  //   e.preventDefault();
  //   this.model.create(this.getMovieForm());
  // },
  // deleteMovie: function() {
  //   if (this.detailsMovie) {
  //     this.detailsMovie.destroy();
  //     this.$('#movie').hide();
  //     this.detailsMovie = undefined;
  //   }
  // },
  render: function() {
    this.$('#movie-list').empty();
    var that = this;
    this.model.nonEmptyTitles().each((movie) => {
      var movieView = new MovieView({
        model: movie,
        template: that.template
      });
      this.$('#movie-list').append(movieView.render().$el);
      // this.listenTo(movieView, "selected", this.showDetails);
    });

    if (that.$('#new-movie').is(':empty')) {
      console.log("empty");
      that.$('#new-movie').empty();
      that.$('#new-movie').html(that.newMovieTemplate({}));
    }
    return this;
  },
  // showDetails: function(model) {
  //   this.detailsMovie = model;
  //   var compiledTemplate = this.detailsTemplate({movie: model.toJSON()});
  //   this.$('#movie').html(compiledTemplate);
  //   this.$('#movie').show();
  // }
});

export default MovieListView;
