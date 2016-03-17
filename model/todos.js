Todos = new Mongo.Collection('todos');

Todos.allow({
	insert: function (userId, todo) {
		return userId && todo.listId.owner === userId;
	},
	remove: function (userId, party) {
		return userId && todo.listId.owner === userId;
	}
});
