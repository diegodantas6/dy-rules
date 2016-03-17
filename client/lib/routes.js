var resolveLogin = {
	currentUser: ($q) => {
		if (Meteor.userId() == null) {
			return $q.reject('AUTH_REQUIRED');
		} else {
			return $q.resolve();
		}
	}
};

angular.module('rules').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'client/pages/index.html'
		})
		.state('list', {
			url: '/list',
			template: '<list-directive></list-directive>',
			resolve: resolveLogin
		})
		.state('todo', {
			url: '/todo',
			template: '<todo-directive></todo-directive>',
			resolve: resolveLogin
		});

	$urlRouterProvider.otherwise("/home");

}).run(function ($rootScope, $state) {
	$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
		if (error === 'AUTH_REQUIRED') {
			console.log('errro');
			$state.go('home');
		}
	});
});
