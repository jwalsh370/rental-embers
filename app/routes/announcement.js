import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },

  actions: {
    saveAnnouncement3(params) {
      var newAnnouncement = this.store.createAnnouncement('announcement', params);
      newAnnouncement.save();
      this.transitionTo('announcement');
    },

    destroyAnnouncement(announcement) {
      announcement.destroyAnnouncement();
      this.transitionTo('announcement');
    }
  }
});
