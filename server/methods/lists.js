Meteor.methods({

	addList: function(list) {

		list.owner = Meteor.user()._id;

		Lists.insert(list);

	},

	removeList: function(listId) {

		Todos.remove({
			listId: listId
		});

		Lists.remove({
			_id: listId
		});

	}

});
