angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  // firebase.initializeApp(config);
  var messaging = firebase.messaging();
  messaging.onMessage(function(payload){
    console.log(payload);
    console.log("test");
  });
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
