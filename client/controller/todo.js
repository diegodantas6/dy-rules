angular.module('rules').directive('todoDirective', function() {
	return {
		restrict: 'E',
		templateUrl: 'client/pages/todo.html',
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
		    
			this.newList = {};

			this.add = () => {
				Todos.insert(this.newList);

				this.newList = {};
			};

			this.remove = (item) => {
				Todos.remove({
					_id: item._id
				});
			};

		}
	}
});
