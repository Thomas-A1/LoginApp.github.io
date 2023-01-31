// Obtaining the form element in html using its id
const form = document.getElementById('form');
/*
Placing an Event listener to the form to ensure that when the user 
clicks on the Sign In or submit button, the email and password will
be validated.
*/
form.addEventListener('submit', function(event){
    event.preventDefault(); // prevents form from submitting after inputing
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    /**
     * Regex pattern for email and password
     * Email can't start with symbols, dots, and numbers
     * Password must include at least one number, and can include zero or more alphanumeric characters and symbols
     */
    const emailregex = /^[^\d\$@\.\-_+()\"\"\'\'\`^&*\(\)<>{}!]\w+([\.-]?\w+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,10})?$/;
    const passwordregex = /^(?=(.*[a-zA-Z]){0,})(?=(.*[\d]){1,})(?=(.*[@$#%\.-\_!+=<>{}/]){0,}).{8,}$/;
    /*
        If the email entered does not match the regex provided, the border is set to a color
        of red, otherwise the border is set to a color of green
    */
    if (!emailregex.test(email.value)) {
        email.style.border = "3px solid rgb(218,27,27)";
    }
    else {
        email.style.border = "3px solid #36cc36";
    }
    /*
        If the password entered does not match the regex provided, the border is set to a color
        of red, otherwise the border is set to a color of green
    */
    if (!passwordregex.test(password.value)){
        password.style.border = "3px solid rgb(218,27,27)";
    }
    else{
        password.style.border = "3px solid #36cc36";
    }
})

