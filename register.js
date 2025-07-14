function validateform()
{
    var username = document.getElementById("userid").value;
    var Email = document.getElementById("emailid").valid;
    var Number = document.getElementById("number").value;
    var Otp = document.getElementById("otp").value;
    var Refer = document.getElementById("refercode").value;

    if ( username == "" || Email == "" || Number == "" || Otp == "" )
    {
        alert("Fill all fields")
        return false;
    }
    else
    {
        true;
    }

 
}
function validform()
{
    var pass= document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;

    if( pass == "" || cpass == "" )
    {
        alert("All field are mandatory.")
        return false;
    }else
    {
        true;
    }
    


    
}
