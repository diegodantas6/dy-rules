Meteor.methods({

	removeList : function(listId) {

		Todos.remove({
			listId: listId
		});

		Lists.remove({
			_id: listId
		});

	}

});
