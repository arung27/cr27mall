function validateform()
{
  var userid = document.getElementById("userid").value;
  var pass = document.getElementById("password").value;

  if ( userid == "" || pass == "")
  {
    alert("all field are mandatory")
    return false;
  }
  if(userid.length <8)
  {
    alert("userid must be 8character")
    return false;
  }
  if(pass.length <6)
  {
    alert ("Password must be of 8 characters")
    return false;
  }
  
  else
  {
    true;
  }
}