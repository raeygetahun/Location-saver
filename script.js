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
        import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        //const analytics = getAnalytics(app);
        const database=getDatabase(app);
        const auth=getAuth();

        //login registration 
        savedata.addEventListener('click',(e)=>{
            var email=document.getElementById('email').value;
            var password=document.getElementById('password').value;
            var username=document.getElementById('username').value;
            console.log(email,password,username);

            

            createUserWithEmailAndPassword(auth, email, password, username)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                //we will not save password to the db
                set(ref(database, 'users/' + user.uid),{
                        username: username,
                        email: email
                });

                alert('user created!');
                // ...
            })
            .catch((error ) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });

            

        });

        login.addEventListener('click',(e)=>{

            var email=document.getElementById('email').value;
            var password=document.getElementById('password').value;
            var username=document.getElementById('username').value;
            

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                const today=new Date();
                update(ref(database, 'users/' + user.uid),{
                        last_login: today
                });

                alert('Logged in!');
                // ...
            })
            .catch((error ) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });


        });
