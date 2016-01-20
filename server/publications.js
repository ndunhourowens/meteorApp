Meteor.publish('ads', function(limit) {
	return Ads.find({},{
		sort: {createdAt: -1},
		fields: { }
	});
});

Meteor.publish('adDetail', function(id) {
	return Ads.find({_id: id});
});

Meteor.publish('fishermanAds', function() {
	return Ads.find({owner: this.userId}, {
		sort: {createdAt: -1}
	});
});
