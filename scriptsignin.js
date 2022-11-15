// var x = document.getElementById("demo");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
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
//     // x.innerHTML="<a href= 'https://www.google.com/maps/search/?api=1&query=47.5951518%2C-122.3316393'>Open in google maps"
//   }
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
        //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
        import { getDatabase} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
        import {set} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
        import {ref,update} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
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
        //const analytics = getAnalytics(app);
        const database=getDatabase(app);
        const auth=getAuth();

        //login registration 
    
        login.addEventListener('click',(e)=>{

            var email=document.getElementById('email').value;
            var password=document.getElementById('password').value;
           
            

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                const today=new Date();
                update(ref(database, 'users/' + user.uid),{
                        last_login: today
                });

                
                // ...
            })
            .catch((error ) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });
            


        });
        
       
        const user = auth.currentUser;
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                window.location="address.html";
                // ...
            } else {
                // window.location="index.html";
                // User is signed out
                // ...
            }
        });
