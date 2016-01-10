Meteor.startup(function() {

	if (Ads.find().count() === 0) {
		var sampleAds = [
		{
			name: 'The Seeker',
			phone: 8082774186,
			fish: 'Ahi',
			size: '10 - 20 lbs',
			quantity: 4,
			price: '$5.00',
			landing: 'Town',
			WholeFish: true,
			WeightByPound: true,
			SoldOut: false,
			landed: Date.now()
		},{
			name: 'Ahi Assassins',
			phone: 8083554177,
			fish: 'Ono',
			size: '20 - 30 lbs',
			quantity: 2,
			price: '$8.00',
			landing: 'NorthShore',
			WholeFish: false,
			WeightByPound: true,
			SoldOut: false,
			landed: Date.now()
		}];

		_.each(sampleAds, function(ad) {
			Ads.insert(ad);
		});
	}
});
