    const username= document.getElementById('username');
    const email= document.getElementById('email');
    const password= document.getElementById('password');
    const form= document.getElementById('form');

    const name_error= document.getElementById('name_error');
    const email_error= document.getElementById('email_error');
    const password_error= document.getElementById('password_error');


    form.addEventListener('submit', (e)=>{

        let valid = true;

        const email_check= /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        const password_check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,20}$/;

        if(username.value==='' || username.value == null){
            name_error.innerHTML= "Username is required";
            valid = false;

        }
        else{
            name_error.innerHTML="";
        }

        if(!email.value.match(email_check)){
            email_error.innerHTML= "Valid email is required.";
            valid = false;

        }else{
            email_error.innerHTML="";
        }

        if (!password.value.match(password_check)) {
            password_error.innerHTML = "Password must be between 6 and 20 characters and include at least one uppercase and lowercase letter, one number, and one special character.";
            valid = false;
        } else {
            password_error.innerHTML = "";
        }

        if (!valid) {
            e.preventDefault();
        } else {
            alert("Form submitted successfully!");
        }

    })
