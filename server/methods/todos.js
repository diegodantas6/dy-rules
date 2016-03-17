Meteor.methods({

	addTodo: function(todo) {

		Todos.insert(todo);

	},

	removeTodo: function(todoId) {

		Todos.remove({
			_id: todoId
		});

	}

});
