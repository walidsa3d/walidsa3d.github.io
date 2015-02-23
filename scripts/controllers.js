myAppModule.controller('ResumeCtrl', function($scope){
}
);
myAppModule.controller('DataCtrl', ['$scope','$http',function($scope,$http){
   $scope.status;
    $scope.repos;

  $http.get('https://api.github.com/users/walidsa3d/repos')
        .success(function(data) {
          $scope.repos=data;
            console.log('Success '+data);
        })
        .error(function(data) {
            console.log('Error '+data);
        });
}
]
);
myAppModule.controller("FeedCtrl", ['$scope', 'FeedService', function ($scope, Feed) {
	$scope.feedurl='https://capsianblog.wordpress.com/feed/';
    $scope.loadFeed = function () {
        Feed.parseFeed($scope.feedurl).then(function (res) {
            $scope.feeds = res.data.responseData.feed.entries;
        });

    }
    $scope.loadFeed();
}]);

myAppModule.factory('FeedService', ['$http', function ($http) {
    return {
        parseFeed: function (url) {
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);