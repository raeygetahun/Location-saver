var x = document.getElementById("demo3");
var x2=document.getElementById("demo4");

export function sendtxt(){
    x.innerHTML="<form><input type = 'text' name='phonenumber' placeholder='Enter phone number' required><br><input type = 'submit' onclick = 'sendtxttonum()'<br></form>";





}
    const accountSid ="AC0b0907e5b1a81f3f604ca53b2e2665ad";
    const authToken = "0f6c00a81a3b01d5fac61e54ae4c4b2a";
    const twilio = require('twilio');
    
    const client = new twilio(accountSid, authToken);

export function sendtxttonum(){
    x.innerHTML=add;
console.log(add);

    
    client.messages
      .create({
         body: add,
         from: '+14793244583',
         to: '+491628874321'
       })
      .then(message => console.log(message.sid));




}

