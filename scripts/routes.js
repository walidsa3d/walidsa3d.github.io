myAppModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/cv", {templateUrl: "partials/cv.html", controller: "ResumeCtrl"}).
	when("/apropos", {templateUrl: "partials/apropos.html", controller: "ResumeCtrl"}).
	when("/downloads", {templateUrl: "partials/downloads.html", controller: "ResumeCtrl"}).
	when("/projects", {templateUrl: "partials/projects.html", controller: "ResumeCtrl"}).
	when("/home", {templateUrl: "partials/home.html", controller: "ResumeCtrl"}).
	when("/github", {templateUrl: "partials/github.html", controller: "GitCtrl"}).
	when("/blog", {templateUrl: "partials/blogfeed.html", controller: "FeedCtrl"}).
	otherwise({redirectTo: '/home'});
}]);