// const functions = require("firebase-functions");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// The Firebase Admin SDK to access Firestore.
// const admin = require("firebase-admin");
// admin.initializeApp();
const { sendSMS } = require("./twilio/sendSMS");
// const BASE_URL = "https://foodsearch-927fe.web.app";
// module.exports.createProduct = functions
//   .region("europe-west3")
//   .firestore.document("products/{productId}")
//   .onCreate(async (snap, context) => {
//     // Get an object representing the document
//     // e.g. {'name': 'Marie', 'age': 66}
//     try {
//       const productId = context.params.productId;
//       const newValue = snap.data();

//       // access a particular field as you would any JS property
//       const name = newValue.title;
//       const category = newValue.category;

//       functions.logger.log("Product id " + productId);
//       functions.logger.log(newValue);
//       let snapshot = await admin
//         .firestore()
//         .collection("userNotifications")
//         .where("category", "==", category)
//         .get();

//       functions.logger.log(newValue);
//       let notifications = snapshot.docs;
//       functions.logger.log("notifications");
//       functions.logger.log(notifications);

//       if (notifications && notifications.length > 0) {
//         let url = `${BASE_URL}/products/${productId}`;
//         notifications.forEach((notification) => {
//           let { phoneNumber } = notification.data();
//           functions.logger.log("phoneNumber");
//           functions.logger.log(phoneNumber);

//           let body = `Near-Expiry Product : ${name} of cat:${category} 
//                     You can find more details here: ${url}
//             `;
          sendSMS(body, phoneNumber);
  //       });
  //     }
  //   } catch (error) {
  //     functions.logger.error(error);
  //   }

  //   // perform desired operations ...
  // });




// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
    
//         import { getDatabase} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
//         import {set} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
//         import {ref,update, onValue} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
//         import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

//         const firebaseConfig = {
//         apiKey: "AIzaSyBS76Sg5UWerhMTpO5xEF67ZfhdX92dD6U",
//         authDomain: "accuratelocationsaver.firebaseapp.com",
//         projectId: "accuratelocationsaver",
//         storageBucket: "accuratelocationsaver.appspot.com",
//         messagingSenderId: "1000791921278",
//         appId: "1:1000791921278:web:0f40ed5d05d92b5199be2f",
//         measurementId: "G-2TWMSD3V8Y",
//         databaseURL: "https://accuratelocationsaver-default-rtdb.europe-west1.firebasedatabase.app"
//         };

//         // Initialize Firebase
//         const app = initializeApp(firebaseConfig);
//         const database=getDatabase(app);
//         const auth=getAuth();
//         // var addressfor;

//         let addressfor="hi";
//         function loadLocation(){
//             // var addressfor
//             const user = auth.currentUser;
//             onAuthStateChanged(auth, (user) => {
//               if (user) {
        
              
//               const db = getDatabase();
//               const starCountRef = ref(db, 'users/' + user.uid);
//               onValue(starCountRef, (snapshot) => {
//                 var add="https://www.google.com/maps/search/?api=1&query="+snapshot.val().lati+"%2C"+snapshot.val().long
//                 // console.log(add);
//                  addressfor=add;
//                  console.log(addressfor);
//                  const recipientForm = document.getElementById('recipientForm');
//                  const sendNotificationForm = document.getElementById('sendNotificationForm');
//                  const newRecipientInput = document.getElementById('newRecipientInput');
//                  const recipientList = document.getElementById('recipients');
//                  const resultSection = document.getElementById('resultSection');
                 
//                  const recipients = [];
                 
//                  function addRecipient(phoneNumber) {
//                    recipients.push(phoneNumber);
//                    const newListItem = document.createElement('li');
//                    newListItem.innerText = phoneNumber;
//                    recipientList.appendChild(newListItem);
//                  }
                 
//                  function clearForm(form) {
//                    // only clearing the passcode and leaving the message for convience
//                    form.passcode.value = '';
//                  }
                 
//                  recipientForm.addEventListener('submit', (evt) => {
//                    evt.preventDefault();
                 
//                    if (newRecipientInput.value) {
//                      addRecipient(newRecipientInput.value);
//                      newRecipientInput.value = '';
//                    }
//                  });
                 
//                  function sendMessages(form) {
//                    const data = {
//                      passcode: form.passcode.value,
//                      message: form.message.value+addressfor,
//                      recipients: recipients.join(','),
//                    };
                 
//                    clearForm(form);
                 
//                    fetch('send-messages', {
//                      method: 'POST',
//                      headers: {
//                        'Content-Type': 'application/json',
//                      },
//                      body: JSON.stringify(data),
//                    })
//                      .then((resp) => {
//                        if (resp.ok) {
//                          return resp.json();
//                        }
                 
//                        if (resp.status === 401) {
//                          throw new Error('Invalid Passcode');
//                        } else {
//                          throw new Error(
//                            'Unexpected error. Please check the logs for what went wrong.'
//                          );
//                        }
//                      })
//                      .then((body) => {
//                        const successCount = body.result.reduce((currentCount, resultItem) => {
//                          return resultItem.success ? currentCount + 1 : currentCount;
//                        }, 0);
                 
//                        resultSection.innerText = `Sent ${successCount} of ${body.result.length} messages. Check logs for details`;
//                      })
//                      .catch((err) => {
//                        resultSection.innerText = err.message;
//                      });
//                  }
                 
//                  sendNotificationForm.addEventListener('submit', (evt) => {
//                    evt.preventDefault();
                 
//                    if (recipients.length === 0 && newRecipientInput.value) {
//                      addRecipient(newRecipientInput.value);
//                      newRecipientInput.value = '';
//                    }
                 
//                    if (recipients.length === 0) {
//                      resultSection.innerText = 'Please enter at least one phone number';
//                    } else {
//                      resultSection.innerText = 'Sending messages. One moment';
//                      sendMessages(evt.target);
//                    }
//                  });
                 
        
//               });
        
//               } 
           
           
//             });
            
//         }
     
//     loadLocation()


