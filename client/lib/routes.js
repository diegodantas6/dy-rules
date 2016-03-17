angular.module('rules').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('list', {
			url: '/list',
			template: '<list-directive></list-directive>'
		})
		.state('todo', {
			url: '/todo',
			template: '<todo-directive></todo-directive>',
			resolve: {
				currentUser: ($q) => {
					if (Meteor.userId() == null) {
						return $q.reject('AUTH_REQUIRED');
					} else {
						return $q.resolve();
					}
				}
			}
		});

	$urlRouterProvider.otherwise("/list");

}).run(function ($rootScope, $state) {
	$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
		if (error === 'AUTH_REQUIRED') {
			$state.go('list');
		}
	});
});
