import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
    
        import { getDatabase} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
        import {set} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
        import {ref,update, onValue} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
        import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

        const firebaseConfig = {
        apiKey: "AIzaSyBS76Sg5UWerhMTpO5xEF67ZfhdX92dD6U",
        authDomain: "accuratelocationsaver.firebaseapp.com",
        projectId: "accuratelocationsaver",
        storageBucket: "accuratelocationsaver.appspot.com",
        messagingSenderId: "1000791921278",
        appId: "1:1000791921278:web:0f40ed5d05d92b5199be2f",
        measurementId: "G-2TWMSD3V8Y",
        databaseURL: "https://accuratelocationsaver-default-rtdb.europe-west1.firebasedatabase.app"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const database=getDatabase(app);
        const auth=getAuth();

var x = document.getElementById("demo");
var x2 = document.getElementById("demo2");


function savetodb(lon,lat){
  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
    const uid = user.uid;

    update(ref(database, 'users/' + user.uid),{
      long: lon,
      lati: lat
    });
  } 
});

}

export function getLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}


function showPosition(position) {
    const p=position.coords;
    var lon=p.longitude;
    var lat=p.latitude;
    console.log(lat);
    console.log(lon);
    savetodb(lon,lat)
    // x.innerHTML="<a href= 'https://www.google.com/maps/search/?api=1&query=47.5951518%2C-122.3316393'>Open in google maps"
  }

  export function loadLocation(){
    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
      if (user) {

      
      const db = getDatabase();
      const starCountRef = ref(db, 'users/' + user.uid);
      onValue(starCountRef, (snapshot) => {
        window.add="https://www.google.com/maps/search/?api=1&query="+snapshot.val().lati+"%2C"+snapshot.val().long
       console.log(add);
        var addressfor=window.add+" target="+"_"+"blank"
        console.log(addressfor)
        x.innerHTML="<a href=" + addressfor + ">Open in google maps<br>";
        x2.innerHTML='<input type="text" id="phoneno" name="phoneno" placeholder="Phone Number"/>\
           ';

      });

      } 
   
   
    });
  }





// const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };
  
//   function success(pos) {
//     const crd = pos.coords;
//     showPosition(pos);
  
//     console.log('Your current position is:');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);
//   }
  
//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }
  
  
//   var x = document.getElementById("demo");

// function getLocation(){
//   if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(success, error, options);
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }


// function showPosition(position) {
//     const p=position.coords;
//     x.innerHTML = "Latitude: " + p.latitude + 
//     "<br>Longitude: " + p.longitude;
//     var add="https://www.google.com/maps/search/?api=1&query="+p.latitude+"%2C"+p.longitude+" target="+"_"+"blank"
//     console.log(add);
//     x.innerHTML="<a href=" + add + ">Open in google maps";
//     // savetodb(p.latitude,p.longitude)
//     // x.innerHTML="<a href= 'https://www.google.com/maps/search/?api=1&query=47.5951518%2C-122.3316393'>Open in google maps"
//   }