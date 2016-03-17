angular.module('rules').directive('loginDirective', function() {
	return {
		restrict: 'E',
		templateUrl: 'client/view/login.html',
		controllerAs: 'vm',
		controller: function ($scope, $reactive, $state) {

			$reactive(this).attach($scope);

			this.credentials = {
				email: '',
				password: ''
			};

			this.login = () => {

				Meteor.loginWithPassword(this.credentials.email, this.credentials.password, (error) => {
					if (error) {
						alert(error);
					} else {
						$state.go('list');
					}
				});

			};

		}
	}
});
