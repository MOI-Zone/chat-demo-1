// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0YNQLJGL2lVIEDrJW-TwYCituJhiqtJA",
    authDomain: "chat-6bb42.firebaseapp.com",
    databaseURL: "https://chat-6bb42-default-rtdb.firebaseio.com",
    projectId: "chat-6bb42",
    storageBucket: "chat-6bb42.appspot.com",
    messagingSenderId: "315120342370",
    appId: "1:315120342370:web:6f0fc3efff8dd6cabac83b",
    measurementId: "G-V8QRYBHSJ0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function guitinnhan() {
    console.log('cc')
    var username = document.getElementById('username').value
    var tinnhan = document.getElementById('tinnhan').value
    var time = gettime()
    firebase.database().ref('chat').set({
        username: username,
        tinnhan: tinnhan,
        time: time
    });
}

function gettime() {
    var date = new Date()
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    return hour + ':' + minutes + ':' + seconds
}

console.log('Started');