App.ApplicationView = Ember.View.extend({
  setup: function() {
    App.removeLoading();
  }.on("didInsertElement")
});