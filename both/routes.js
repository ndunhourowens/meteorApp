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
	template: 'marketPlace'
});
Router.route('profile', {
	path: '/profile/:_id',
	template: 'profile',
});
Router.route('marketPlace', {
	path: '/marketPlace',
	template: 'marketPlace',
	subscriptions: function() {
		return Meteor.subscribe('ads');
	},
	data: function() {
		return Ads.find({}, {sort: {createdAt: -1}});
	}

});
Router.route('fishermanRegister', {
	path: '/fishermanRegister',
	template: 'fishermanRegister'
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
		return Meteor.subscribe('fishermanAds');
	},
	data: function() {
		return Ads.find({}, {sort: {createdAt: -1}});
	}
});