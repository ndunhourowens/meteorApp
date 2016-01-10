Router.configure({
	layoutTemplate: 'baseLayout'
});

Router.route('marketPlace', {
	path: '/marketPlace',
	template: 'marketPlace',
});
Router.route('adForm', {
	path: '/newAd',
	template: 'adForm',
});
Router.route('/ad', {
	path: '/ad/:_id',
	template: 'ad',
	data: function() {
			return Ads.findOne({_id: this.params._id});
		}
});