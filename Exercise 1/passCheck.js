const passwordCheck = (pass1,pass2) =>{
    if(pass1 === pass2){
        if(pass1.length >= 8 && pass2.length >= 8){
            alert("The passwords match");
        } else {
            alert("The password must be at least 8 characters long");
        }
    } else{
        alert("The passwords do not match");
    }
}