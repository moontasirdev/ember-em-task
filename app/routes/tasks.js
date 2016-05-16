import Ember from 'ember';
import Model from 'ember-data/model';
import DS from 'ember-data';

export default Ember.Route.extend({
    model: function () {
        return this.store.findAll('task');
    }
});
