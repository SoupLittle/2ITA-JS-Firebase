 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyA-RG9vZn48ZVvOuAHFP3MmdpboUzixjNc",
   authDomain: "js-firebase-fee2e.firebaseapp.com",
   projectId: "js-firebase-fee2e",
   storageBucket: "js-firebase-fee2e.appspot.com",
   messagingSenderId: "668339491704",
   appId: "1:668339491704:web:ef5801ea88b1f35df06e8d",
   measurementId: "G-PS9885LWFF"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

  import {getDatabase, ref, get, set, child, update, remove}
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

  function SelectData(){
    var dbref = ref(db)

    get(child(dbref,"TheStudents/"+rolbox.value)).then((snapshot)=>{
        if(snapshot.exists()){
            namebox.value = snapshot.val().NameOfStd;
            secbox.value = snapshot.val().Section
            genbox.value= snapshot.val().Gender
        } else{
            alert("No data found")
        }
    })
    .catch( (error) => {
      alert("Unsuccessful, error"+error);
    });
  }

  function UpdateData(){
    update(ref(db,"TheStudents/"+ rolbox.value), {
        NameOfStd: namebox.value, 
        Section: secbox.value,
        Gender: genbox.value
    })
    .then(()=>{
        alert("Data updated successfully")
    })
    .catch((error)=>{
        console.error("Error:", error)
        alert("Unsuccessful, error"+error)
    })
  }

  
  function DeleteData(){
    remove(ref(db,"TheStudents/"+ rolbox.value), {
      
    })
    .then(()=>{
        alert("Data deleted successfully")
    })
    .catch((error)=>{
        console.error("Error:", error)
        alert("Unsuccessful, error"+error)
    })
  }

  insBtn.addEventListener('click',InsertData)
  selBtn.addEventListener('click',SelectData)
  updBtn.addEventListener('click',UpdateData)
  delBtn.addEventListener('click',DeleteData)