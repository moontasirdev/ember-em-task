import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addTask: function() {
            var self = this;
            
            var formData = {
                title: self.get('title'),
                date: new Date(self.get('date')),
                description: self.get('description')                
            };     
            
            //Create DB model
            var newTask = this.store.createRecord('task', formData);
            
            //Save to firebase
            newTask.save();
            
            //clear form
            this.setProperties (
                {
                    title: '',
                    date: '',
                    description: ''               
                }      
            );                
        }
    }
});
