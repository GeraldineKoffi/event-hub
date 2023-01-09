import React from "react";
import {Redirect} from 'react-router-dom'

function forgetPass(){
    const [redirect, setRedirect] = React.useState(false)
    setRedirect(true)
    return(
    <form className="login">
        <h3 className="modif">Mot de passe oublié</h3>
        <label>Id:</label>
        <input placeholder={localStorage.getItem('id')}/><br/>
        <label>Entrer un nouveau mot de passe:</label><br/>
        <input placeholder="Entrer un nouveau mot de passe"/><br/>
        <label>Confirmer le nouveau mot de passe:</label><br/>
        <input placeholder="Confirmer le nouveau mot de passe"/><br/>
        <button className="valid">Changer</button>
        {redirect? <Redirect to="/dashboard" />: null}
    </form>
    )
}
export default forgetPass