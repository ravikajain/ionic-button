angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  var config = {
    apiKey: "AIzaSyDs83fCGsYjdZULGj3N7mnXRlBSUIo7Rsw",
    authDomain: "pwatest-89869.firebaseapp.com",
    databaseURL: "https://pwatest-89869.firebaseio.com",
    projectId: "pwatest-89869",
    storageBucket: "pwatest-89869.appspot.com",
    messagingSenderId: "1043250904569"
  };
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
