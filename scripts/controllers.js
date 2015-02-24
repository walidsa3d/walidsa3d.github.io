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
myAppModule.factory('FeedService', ['$http', function ($http) {
    return {
        parseFeed: function (url) {
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);
myAppModule.controller('ExCtrl', function ($scope) {
 $scope.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                transitionDuration: 500,
                labelThreshold: 0.01,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $scope.data = [
            {
                key: "Java",
                y: 5
            },
            {
                key: "Python",
                y: 2
            },
            {
                key: "JavaScript",
                y: 9
            },
            {
                key: "Shell",
                y: 7
            }
        ];

});











