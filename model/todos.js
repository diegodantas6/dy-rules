Todos = new Mongo.Collection('todos');

Todos.allow({
	insert: function (todo) {
		// return true;
		return false;
	},
	remove: function (todo) {
		// return true;
		return false;
	}
});
