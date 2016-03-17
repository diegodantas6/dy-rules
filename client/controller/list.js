angular.module('rules').directive('listDirective', function() {
	return {
		restrict: 'E',
		templateUrl: 'client/pages/list.html',
		controllerAs: 'vm',
		controller: function ($scope, $reactive) {

			$reactive(this).attach($scope);

			this.subscribe('lists');

			this.helpers({
				list: () => {
					return Lists.find({});
				}
			});
		    
			this.newList = {};

			this.add = () => {
				
				if(!Meteor.user())
					throw new Meteor.Error("not-authorized by App");

				this.newList.owner = Meteor.user()._id;
				Lists.insert(this.newList);

				this.newList = {};
			};

			this.remove = (item) => {
				// remove details first
				/*
				Todos.remove({
					listId: item._id
				});
				*/

				// remove master
				Lists.remove({
					_id: item._id
				});
			};

		}
	}
});
