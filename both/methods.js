Meteor.methods({
	addData: function(ad) {
		return Ads.insert(ad);
	},
	newFisherman: function(email, password){
		return Accounts.createUser({
			"email": email,
			"password": password,
		});
	},
	isFisherman: function(fisherman){
		return Meteor.users.update({_id:this.userId},{$set: {
			fisherman:true,
			profile: fisherman,
		}});
	}
});
