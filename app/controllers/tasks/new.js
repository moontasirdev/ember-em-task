import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addTask: function() {
            debugger;
            var title = this.get('title');
            alert(title);
        }
    }
});
