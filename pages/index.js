import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<script type="module">
	  unction getStartToken(){
messaging.getToken().then((currentToken) => {
if (currentToken) {
sendTokenToServer(currentToken);
} 
else {
// Show permission request.
RequestPermission();
setTokenSentToServer(false);
}
}).catch((err) => {
setTokenSentToServer(false);
});
}
function RequestPermission(){
messaging.requestPermission()
.then(function(permission){
if (permission === 'granted') {
console.log("have Permission");
//calls method again and to sent token to server
getStartToken();
 }
 else{console.log("Permission Denied");}
.catch(function(err){
console.log(err);
})
}
function sendTokenToServer(token){ 
if (!isTokensendTokenToServer()) {
$.ajax({
url: URL,
type: 'POST',
data: {
//whatever you wanna send
push_token:token,
},
success: function (response) {
setTokenSentToServer(true);
},
error: function (err) {
setTokenSentToServer(false);
},
});
}}
function isTokensendTokenToServer() {
return window.localStorage.getItem('sendTokenToServer') === '1';
}
function setTokenSentToServer(sent) {
window.localStorage.setItem('sendTokenToServer', sent ? '1' : '0');
}
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB32Ss2JsvE6aFhvT1Mu9Raacq0PkKS4LQ",
    authDomain: "esc-test-project.firebaseapp.com",
    databaseURL: "https://esc-test-project.firebaseio.com",
    projectId: "esc-test-project",
    storageBucket: "esc-test-project.appspot.com",
    messagingSenderId: "610172757990",
    appId: "1:610172757990:web:75157e4531de2df3985827",
    measurementId: "G-SNWGNE3DQ5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  
     getStartToken();
	//This code recieve message from server /your app and print message to console if same tab is opened as of project in browser 
	messaging.onMessage(function(payload){
	console.log("on Message",payload);
});
</script>
      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
