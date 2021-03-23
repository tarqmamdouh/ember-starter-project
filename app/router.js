import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route("login");
  this.route("signup");
  this.route("dashboard", function() {});
  this.route('questions', { path: "" }, function() {
      this.route('new', { path: '/ask' });
      this.route('show', { path: '/questions/:slug' });
      this.route('edit', { path: '/questions/:slug/edit' });
      this.route('destroy', { path: '/questions/:slug/destroy' });
  });
  this.route('not-found', { path: '/*path' });

  this.route('answers', function() {
    this.route('new');
    this.route('edit');
    this.route('destroy');
  });
});

export default Router;