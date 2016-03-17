angular.module('rules').directive('listDirective', function() {
	return {
		restrict: 'E',
		templateUrl: 'client/view/list.html',
		controllerAs: 'vm',
		controller: function ($scope, $reactive) {

			$reactive(this).attach($scope);

			this.subscribe('lists');

			this.helpers({
				list: () => {
					return Lists.find({});

					// return Meteor.call('getList');

					// Meteor.call('getList', function(e, s) {
					// 	if (e) {
					// 		console.log(e);
					// 	} else {
					// 		// return s;
					// 		Session.set('data', s);
					// 	}
					// });
				}
			});
		    
			this.newList = {};

			this.add = () => {

				Meteor.call('addList', this.newList);

				this.newList = {};
			};

			this.remove = (item) => {

				Meteor.call('removeList', item._id);
				
			};

		}
	}
});
