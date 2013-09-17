// Dependencies
require("dependencies/jquery-2.0.3.js");
require("dependencies/handlebars.runtime.js");
require("dependencies/ember-1.0.0.js");

// Templates
require("dependencies/compiled/templates");

App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  rootElement: "#app",
  
  removeLoading: function() {
    $(".loading").remove();
  }
});

require("app/views/views.js");

App.ApplicationRoute = Ember.Route.extend();
App.IndexRoute = Ember.Route.extend();