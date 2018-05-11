import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
      DeletePost(author){
        this.get('store').findRecord('author', author.get('id')).then(alert("El reporte con id "+author.get('id')+" se va"));
      }
    }
});
