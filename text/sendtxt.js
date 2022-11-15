const accountSid ="AC0b0907e5b1a81f3f604ca53b2e2665ad";
const authToken = "0f6c00a81a3b01d5fac61e54ae4c4b2a";

const client = require("twilio")(accountSid, authToken);
console.log("hiformdf");

// client.messages
//       .create({
//          body: "window.add",
//          from: '+14793244583',
//          to: '+491628874321'
//        })
//       .then(message => console.log(message.sid));
// // function hello(){
//     console.log("phone");
// }
// hello();
submitphone.addEventListener('click',(e)=>{
    client.messages
    .create({
       body: "add",
       from: '+14793244583',
       to: '+491628874321'
     })
    
    console.log("phone");
});

