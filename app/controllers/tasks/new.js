import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addTask: function() {
            var self = this;
            
            var formData = {
                title: self.get('title'),
                date: self.get('date'),
                description: self.get('description')                
            }                        
        }
    }
});
