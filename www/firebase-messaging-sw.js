importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
var config = {
  apiKey: "AIzaSyDs83fCGsYjdZULGj3N7mnXRlBSUIo7Rsw",
  authDomain: "pwatest-89869.firebaseapp.com",
  databaseURL: "https://pwatest-89869.firebaseio.com",
  projectId: "pwatest-89869",
  storageBucket: "pwatest-89869.appspot.com",
  messagingSenderId: "1043250904569"
};
firebase.initializeApp(config);
var messaging = firebase.messaging();
 // messaging
 //   .requestPermission()
 //   .then(function () {
 //     // MsgElem.innerHTML = "Notification permission granted."
 //     console.log("Notification permission granted.");
 //     // get the token in the form of promise
 //     console.log(messaging.getToken());
 //     return messaging.getToken()
 //   })
 //   .then(function(token) {
 //     // print the token on the HTML page
 //     // TokenElem.innerHTML = "token is : " + token;
 //     console.log("Token is "+token);
 //   })
 //   .catch(function (err) {
 //   // ErrElem.innerHTML = ErrElem.innerHTML + "; " + err
 //   console.log("Unable to get permission to notify.", err);
 // });

  // }
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: payload.data["body"],
    icon: 'img/ionic.png'
  };

  // return self.registration.showNotification(notificationTitle,notificationOptions);
  return null;
  // return payload;
});
