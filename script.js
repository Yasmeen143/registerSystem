var x;
var y;
var z;

const firebaseConfig = {
    apiKey: "AIzaSyBtP2rOcxzcHThrdcKuDsV6AGm9z5JG-mg",
    authDomain: "registersystem-19a05.firebaseapp.com",
    projectId: "registersystem-19a05",
    storageBucket: "registersystem-19a05.appspot.com",
    messagingSenderId: "303547627992",
    appId: "1:303547627992:web:f336a7fd510ef830685aad"
  };

firebase.initializeApp(firebaseConfig);

function create(){
    x= document.getElementById("input1").value 
    y= document.getElementById("input2").value
    z= document.getElementById("input3").value
    console.log("hello " + z)
    loginUser(x,y,z)
}
function login(){
    x= document.getElementById("input1").value 
    y= document.getElementById("input2").value
       console.log("hello " + y)
    loginUser(x,y)
}

function registerUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password,user_name)
    .then(cred => {
        console.log("User successfully created!");
}).catch(err => {
    console.log(err.message);
})
}


function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            alert('Successfully authenticated!');
            // direct to logic success page
            window.location.href = 'createpost.html';
        }).catch(err => {
            console.log(err.message);
        }
        )
}
