Template.ad.events({
	'click .contact': function(event) {
		event.preventDefault();
		var adId = $(event.currentTarget).parent('.ad').data('id');

	}
});
