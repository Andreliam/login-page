document.getElementById('loginform').addEventListener('submit',function(event){
    event.preventDefault();
    const username=document
    .getElementById('username').value;
    const password=document
    .getElementById('password').value;
    const message= document
    .getElementById('message');


    if(username === "admin && password ==="password"){
        message.style.color ="4caf50";
        message.textcontent="login successful!";
    } else {message . textcontent="incorrect username or password!";

});