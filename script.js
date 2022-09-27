//* setup database
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
firebase.initializeApp(firebaseConfig);

//* Gửi tin nhắn
function guitinnhan() {
    var username = document.getElementById('username').value
    var tinnhan = document.getElementById('tinnhan').value
    var time = gettime()
    firebase.database().ref('chat').push({
        username: username,
        tinnhan: tinnhan,
        time: time
    });
}

//* Lấy thời gian, Ex: 12:32:43
function gettime() {
    var date = new Date;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    return hour + ':' + minutes + ':' + seconds
}


//* Load tin nhắn
firebase.database().ref('/chat').on("child_added", function (snapshot) {
    var tinnhan = tinnhanmau;
    var tinnhan = tinnhan.replace('%USERNAME%', snapshot.val().username)
    var tinnhan = tinnhan.replace('%TINNHAN%', snapshot.val().tinnhan)
    var tinnhan = tinnhan.replace('%TIME%', snapshot.val().time)
    //* load tin nhắn vào list
    $('#listtinnhan').append(tinnhan)
});

//* mẫu tin nhắn
var tinnhanmau = `<p ng-repeat="m in messages"><b>%USERNAME%:</b> %TINNHAN% - <i>%TIME%</i></p>`

//* xóa tin nhắn
function deletechat() {
    if (confirm('Are you sure to remove ALL the chat?')) {
        firebase.database().ref('chat').remove()
        $('#listtinnhan').html('')
    }
}