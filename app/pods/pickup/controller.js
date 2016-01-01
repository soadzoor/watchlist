import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newItem: function () {
            var item = {};
            item.name = $('[name="name"]').val();
            item.type = $('[name="type"]').val();
            item.count = 1;
            item.isWatched = false;
            item.isBeingEdited = true;
            this.store.createRecord('item', item).save();
        }
    }
});
