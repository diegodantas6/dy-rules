angular.module('rules').directive('registerDirective', function() {
	return {
		restrict: 'E',
		templateUrl: 'client/view/register.html',
		controllerAs: 'vm',
		controller: function ($scope, $reactive, $state) {

			$reactive(this).attach($scope);

			this.credentials = {
				email: '',
				password: ''
			};

			this.register = () => {

				Accounts.createUser(this.credentials, (error) => {
					if (error) {
						alert(error.reason);
					} else {
						$state.go('list');
					}
				});

			};

		}
	}
});
