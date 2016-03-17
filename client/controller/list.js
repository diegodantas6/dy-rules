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

				Meteor.call('addList', this.newList, function(error, result) {

					if (error) {
						// show reason error when name is 'aaa'
						alert(error.reason);
					} else {
						// log id of the object list saved
						console.log(result);
					}

				});

				this.newList = {};
			};

			this.remove = (item) => {

				Meteor.call('removeList', item._id);
				
			};

		}
	}
});
