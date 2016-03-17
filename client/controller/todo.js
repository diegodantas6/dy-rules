angular.module('rules').directive('todoDirective', function() {
	return {
		restrict: 'E',
		templateUrl: 'client/view/todo.html',
		controllerAs: 'vm',
		controller: function ($scope, $reactive) {

			$reactive(this).attach($scope);

			this.subscribe('lists');

			this.subscribe('todos');

			this.helpers({
				list: () => {
					return Lists.find({});
				},
				todos: () => {
					return Todos.find({});
				}
			});
		    
			this.newTodo = {};

			this.add = () => {

				Meteor.call('addTodo', this.newTodo);
				
				this.newTodo = {};

			};

			this.remove = (item) => {

				Meteor.call('removeTodo', item._id);

			};

		}
	}
});
