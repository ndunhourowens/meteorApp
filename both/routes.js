Router.configure({
	layoutTemplate: 'baseLayout'
});

// Router.onBeforeAction(function(){
// 	if(Meteor.userId()){
// 		// if(Meteor.user().userProfile){
// 		this.next();
// 		// } 
// 	} else {
// 		Router.go('/profile/' + Meteor.userId());
// 		// }
// 	}
// })
Router.route('', {
	path: '/',
	template: 'marketPlace',
	subscriptions: function() {
		return Meteor.subscribe('ads');
	},
	data: function() {
		return Ads.find({}, {sort: {createdAt: -1}});
	}
});
Router.route('fishermanProfile', {
	path: '/fishermanProfile/:_id',
	template: 'fishermanProfile',
});
Router.route('consumerProfile', {
	path: '/consumerProfile/:_id',
	template: 'consumerProfile',
});
Router.route('marketPlace', {
	path: '/marketPlace',
	template: 'marketPlace',
	subscriptions: function() {
		return Meteor.subscribe('ads');
	},
	data: function() {
		return Ads.find({}, {sort: {createdAt: -1}});
	},
	layout: function(){
		if(Meteor.user().fisherman){
			return 'fishermanLayout';
		}
	}
});
Router.route('fishermanRegister', {
	path: '/fishermanRegister',
	template: 'fishermanRegister'
});
Router.route('consumerRegister', {
	path: '/consumerRegister',
	template: 'consumerRegister'
});
Router.route('adForm', {
	path: '/newAd',
	template: 'adForm',
});
Router.route('ad', {
	path: '/ad/:_id',
	template: 'ad',
	subscriptions: function() {
		return Meteor.subscribe('adDetail', this.params._id);
	},
	data: function() {
			return Ads.findOne({_id: this.params._id});
		}
});
Router.route('managePosts', {
	path: '/managePosts',
	template: 'managePosts',
	subscriptions: function() {
		return [
			Meteor.subscribe('fishermanAds'),
			Meteor.subscribe('thisUser'),
		];
	},
	data: function() {
		return Ads.find({}, {sort: {createdAt: -1}});
	}
});