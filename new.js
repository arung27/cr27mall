function validateform()
{
    var pass = document.getElementById("verifyotp1").value;
    var cpass = document.getElementById("verifyotp2").value;

    if ( pass == "" || cpass == ""){
        alert ("Fill all fields.")
    return false;}
    else{
        return true;
    }

}