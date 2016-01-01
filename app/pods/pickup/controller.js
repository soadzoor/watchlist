import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newItem: function () {
            var item = {};
            item.name = $('[name="name"]').val();
            item.category = $('[name="type"]').val();
            item.isWatched = false;
            item.isBeingEdited = true;
            this.store.createRecord('item', item).save();
        }
    }
});
