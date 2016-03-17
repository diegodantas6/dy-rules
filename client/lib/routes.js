var resolveLogin = {
	currentUser: ($q) => {
		if (Meteor.userId() == null) {
			return $q.reject('AUTH_REQUIRED');
		} else {
			return $q.resolve();
		}
	}
};

var resolveLogout = {
	currentUser: ($q) => {
		return $q.reject('LOGOUT');
	}
};

angular.module('rules').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('home', {
			url: '/home',
			// template: '<home-directive></home-directive>'
			templateUrl: 'client/view/home.html'
		})
		.state('login', {
			url: '/login',
			template: '<login-directive></login-directive>'
		})
		.state('register', {
			url: '/register',
			template: '<register-directive></register-directive>'
		})
		.state('logout', {
			url: '/logout',
			resolve: resolveLogout
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

			// console.log('login required');

			$state.go('home');
		
		} else if (error === 'LOGOUT') {

			// console.log('logout');

			$state.go('home');

			Accounts.logout();

		}
	});
});
