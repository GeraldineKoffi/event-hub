function validation(nameInputRef,emailInputRef,adressInputRef,gerantInputRef,numRcsInputRef, telInputRef,passwordBixInputRef,passwordInputRef){
    let error = {}
    const email_pattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
console.log();
    if(!nameInputRef){
        error.nameInputRef="Veuillez entrer un nom svp"
    }
    if(emailInputRef=== ""){
        error.emailInputRef="Veuillez entrer un email svp"
    }
     if(!email_pattern.test(emailInputRef)){
        error.emailInputRef="Email non correct"
     }
     if(adressInputRef=== ""){
        error.adressInputRef="Veuillez entrer une adresse svp"
    }
    if(telInputRef=== ""){
        error.telInputRef="Veuillez entrer un numéro de téléphone svp"
    }
    if(gerantInputRef=== ""){
        error.gerantInputRef="Veuillez entrer un email svp"
    }
    if(numRcsInputRef=== ""){
    error.numRcsInputRef="Veuillez entrer un email svp"
}
    if(passwordInputRef=== ""){
        error.passwordInputRef="Veuillez entrer un mot de passe svp"
    }
    if(!password_pattern.test(passwordInputRef)){
        error.passwordInputRef="password non correct"
     }

    if(passwordBixInputRef ==="" || String(passwordBixInputRef) !== String(passwordInputRef)){
        error.passwordBixInputRef="le mot de passe est différent de premier"
    }
    return error
}
export default validation
