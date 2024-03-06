
  // Import the functions you need from the SDKs you need
  import{ initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDrVeAJzZpysxq8hg8Jou06-kkwnJFgC-s",
    authDomain: "js-school-58e85.firebaseapp.com",
    projectId: "js-school-58e85",
    storageBucket: "js-school-58e85.appspot.com",
    messagingSenderId: "203900955332",
    appId: "1:203900955332:web:783013cfa06b56fc763791",
    measurementId: "G-NQS84RCQ9S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  import {getDatabase, ref, set, child, update, remove}
  from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

  var db = getDatabase()

  var namebox = document.getElementById("Namebox")
  var rolbox = document.getElementById( "Rollbox" )
  var secbox = document.getElementById("Secbox")
  var genbox = document.getElementById("Genbox")
  
  var insBtn = document.getElementById( "Insbtn" )
  var selBtn = document.getElementById("Selbtn")
  var updBtn = document.getElementById("Updbtn")
  var delBtn = document.getElementById( "Delbtn" )


  function InsertData(){
    set(ref(db,"TheStudents/"+ rolbox.value), {
        NameOfStd: namebox.value,
        RollNo: rolbox.value,
        Section: secbox.value,
        Gender: genbox.value
    })
    .then(()=>{
        alert("Data stored successfully")
    })
    .catch((error)=>{
        console.error("Error:", error)
        alert("Unsuccessful, error"+error)
    })
  }

  insBtn.addEventListener('click',InsertData)