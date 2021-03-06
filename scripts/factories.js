
myAppModule.factory('GitService', ['$http', function ($http) {
return $http.get('https://api.github.com/users/walidsa3d/repos?per_page=100&type=created');

}]);
myAppModule.factory('FeedService', ['$http', function ($http) {
    return {
        parseFeed: function (url) {
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);
