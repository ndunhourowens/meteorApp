Template.marketPlace.helpers({
	ads: function() {
		return Ads.find({}, {sort: {createdAt: -1}});
	}
})