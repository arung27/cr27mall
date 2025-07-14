function validform()
{
    var Number = document.getElementById("enterno").value;

    if ( Number == "")
    {
        alert("Enter number")
        return false;
    }else{
        true;
    }
}
document.getElementById("forgotform").addEventListener('submit', function (e) { e.preventDefault();

const selectedOption = document.querySelector('input[name="newid"]:checked');

if (!selectedOption) {
    alert ('Select an option');
    return false; 
}

if (selectedOption.value === 'forgetid') {
    window.location.href = 'newid.html';
}else if ( selectedOption.value === 'forgetpassword'){
    window.location.href = 'newpass.html';
}
})
