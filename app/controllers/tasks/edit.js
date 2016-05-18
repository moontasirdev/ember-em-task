import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        editTask: function(id) {
            var self = this;
            
            var formData = {
                title: self.get('model.title'),
                date: new Date(self.get('model.date')),
                description: self.get('model.description')                
            };     
            
            //update task
            this.store.findRecord('task', id).then(function (task) {
                task.set('title', formData.title);
                task.set('date', formData.date);
                task.set('description', formData.description);  
                task.save();
                self.tarnsitionTo('tasks');  
            });
        }
    }
});
