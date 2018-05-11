import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('authors', function() {
    this.route('author', { path: '/:id'}, function() {
      this.route('blog-post');
    });
  });
});

export default Router;
