import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        equipItem: function (model) {
            //alert(model.id);
            this.store.find('item', model.id)
                .then(function (item) {
                    item.set('isBeingEdited', !item.get('isBeingEdited'));
                    item.set('name', document.getElementById(model.id).value);
                    item.save();
            });
        },
        watchItem: function (model) {
            //alert(model.id);
            this.store.find('item', model.id)
                .then(function (item) {
                    item.set('isWatched', !item.get('isWatched'));
                    item.save();
            });
        },
        removeItem: function(model) {
            this.store.findRecord('item', model.id).then(function(model) {
                    model.destroyRecord();
                });
            /*if(document.getElementById(model.id).value === '') {
                this.store.findRecord('item', model.id).then(function(model) {
                    model.destroyRecord();
                });
            
            }
            else {
                //todo.get('model').save();
                this.store.find('item', model.id)
                    .then(function (model) {
                        model.set('name', document.getElementById(model.id).value);
                        model.save();
                    });
            }*/
        }
    }
});
