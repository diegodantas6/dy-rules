Lists = new Mongo.Collection('lists');

Lists.allow({
	insert: function (userId, item) {
		return userId && item.owner === userId;
	},
	remove: function (userId, item) {
		return userId && item.owner === userId;
	}
});
