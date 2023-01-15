importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');
// Your web app's Firebase configuration
    var firebaseConfig = {
  apiKey: "AIzaSyB32Ss2JsvE6aFhvT1Mu9Raacq0PkKS4LQ",
  authDomain: "esc-test-project.firebaseapp.com",
  databaseURL: "https://esc-test-project.firebaseio.com",
  projectId: "esc-test-project",
  storageBucket: "esc-test-project.appspot.com",
  messagingSenderId: "610172757990",
  appId: "1:610172757990:web:75157e4531de2df3985827",
  measurementId: "G-SNWGNE3DQ5"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.usePublicVapidKey(BOIeXfD6zR-oHVpbXab_oedXMfkvjbf0ukBYgA3rXjygO4ZGWAMbl9s5Q_MEvhg9toxkAf4TTKrp-VbIwQI7e6c);
messaging.onBackgroundMessage(function(payload) {
const notificationTitle = payload.data.title;
const notificationOptions = {
body: payload.data.message,
icon:'PATH TO ICON IF ANY',
data: { url:payload.data.onClick }, //the url which we gonna use later
};
return self.registration.showNotification(notificationTitle,notificationOptions);
});
//Code for adding event on click of notification
self.addEventListener('notificationclick', function(event) {
let url = event.notification.data.url;
event.notification.close(); 
event.waitUntil(
clients.matchAll({type: 'window'}).then( windowClients => {
// Check if there is already a window/tab open with the target URL
for (var i = 0; i < windowClients.length; i++) {
var client = windowClients[i];
// If so, just focus it.
if (client.url === url && 'focus' in client) {
return client.focus();
}
}
// If not, then open the target URL in a new window/tab.
if (clients.openWindow) {
return clients.openWindow(url);
}
})
);
});