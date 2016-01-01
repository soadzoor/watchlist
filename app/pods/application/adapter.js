import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://watchlist-api-soadzoor.c9users.io',
    namespace: 'api/v1'
});
