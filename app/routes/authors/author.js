import Route from '@ember/routing/route';

export default Route.extend({
  model: function(){
    return {
      author: this.store.findAll('author')
    }
  },
  
});
