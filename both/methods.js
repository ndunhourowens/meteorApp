Meteor.methods({
	addData: function(ad) {
		return Ads.insert(ad);
	},
	newUser: function(email, password){
		return Accounts.createUser({
			"email": email,
			"password": password,
		});
	},
	updateFisherman: function(fisherman){
		return Meteor.users.update({_id:this.userId},{$set: {profile: fisherman, fisherman:true,}});
	},
	updateConsumer: function(consumer){
		return Meteor.users.update({_id:this.userId},{$set: {profile: consumer}});
	}
});
