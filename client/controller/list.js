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
				
				/*
				if(!Meteor.user()) {
					alert('Faz o login ai troxa');
					return;
					//throw new Meteor.Error("not-authorized by App");
				}	

				this.newList.owner = Meteor.user()._id;
				Lists.insert(this.newList);

				this.newList = {};
				*/

				Meteor.call('addList', this.newList);

				this.newList = {};
			};

			this.remove = (item) => {

				Meteor.call('removeList', item._id);
				
			};

		}
	}
});
