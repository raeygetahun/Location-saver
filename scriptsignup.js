

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
        savedata.addEventListener('click',(e)=>{
            var email=document.getElementById('email').value;
            var password=document.getElementById('password').value;
            var username=document.getElementById('email').value;
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
                window.location="signin.html";     // ...
            })
            .catch((error ) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });

            

        });
