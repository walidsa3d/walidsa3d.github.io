myAppModule.controller('ResumeCtrl', function($scope){
}
);
// myAppModule.controller('DataCtrl', ['$scope','$http',function($scope,$http){
//    $scope.status;
//     $scope.repos;

//   $http.get('https://api.github.com/users/walidsa3d/repos')
//         .success(function(data) {
//           $scope.repos=data;
//             console.log('Success '+data);                
//         })
//         .error(function(data) {
//             console.log('Error '+data);
//         });
// }
// ]
// );
myAppModule.controller('UserCtrl', function($scope){
$scope.uname="Walid Saad";
$scope.job="Software Engineer";
$scope.address="";
$scope.mail="walid.sa3d@gmail.com";
$scope.phone="22227151";
}
)