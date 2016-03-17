Todos = new Mongo.Collection('todos');

Todos.allow({
	insert: function (todo) {
		return true;
	},
	remove: function (todo) {
		return true;
	}
});
