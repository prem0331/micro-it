let loggedin=false;
let username;
let password;
while(!loggedin){
    username=window.prompt("enter your username")
    password=window.prompt("enter your password")
    if   (username=="myusername" && password=="mypassword"){
        loggedin=true
        console.log("you are logged in!")
    }
    else{
        console.log("invalid credentaials ! please try again")
    }
}