Meteor.methods({
	addData: function(ad) {
		var adId = Ads.insert(ad);
		return adId;
		
	},	
});