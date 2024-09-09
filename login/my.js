document.getElementById('loginForm'),addEventListener('submit',function(event){


    event.preventDefault();
    const username=document
    .getElementById('username').value;
    const password=document
    .getElementById('password').value;
    const message= document
    .getElementById('message');
    
    
    
    if(username === "admin" && password ===" "){
        // console.log("my name");
        message.style.color ="4caf50";
        message.textcontent="login successful!";
    } else {
        message.style.color ="red";
        message.textcontent="incorrect username or password!";
    }
}

);
// document.getElementById('loginForm'),
// addEventListener('submit', function(event){
    
// });