myAppModule.controller('ResumeCtrl', function($scope){
}
);
myAppModule.controller('DataCtrl', ['$scope','$http',function($scope,$http){
   $scope.status;
    $scope.repos;

  $http.get('https://api.github.com/users/walidsa3d/repos?type=created')
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
myAppModule.controller("GitCtrl", ['$scope', 'GitService', function ($scope, Git) {
    Git.success(function(data) { 
    $scope.repos = data;
})}]);












