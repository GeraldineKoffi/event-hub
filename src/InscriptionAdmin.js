import React, {useRef } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

function InscriptionAdmin(){
    const [redirect, setRedirect] = React.useState(false)
    const nameInputRef= useRef();
    const prenomInputRef=useRef();
    const emailInputRef= useRef();
    const telInputRef= useRef();
    const passwordInputRef= useRef();
    const passwordBixInputRef= useRef();
 

const handleSubmit=async(event)=>{
    event.preventDefault()
   
    const lastName= nameInputRef.current.value;
    const firstName= prenomInputRef.current.value;
    const mail= emailInputRef.current.value; 
    const pass = passwordInputRef.current.value;
    const telephone= telInputRef.current.value; 
   
    console.log(lastName,firstName, mail ,telephone, pass)
    try {
        await axios.post("http://localhost:4000/admin",{
          lastName,
          firstName,
           mail,
           telephone,
            pass
        })
        .then(response=>{
          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('lastName', response.data.user.lastName)
          localStorage.setItem('firstName', response.data.user.firstName)
          localStorage.setItem('mail', response.data.user.mail)
          localStorage.setItem('telephone', response.data.user.telephone)
          localStorage.setItem('id', response.data.user.id)
          setRedirect(true)
        }
         )
      } catch (err) {
        console.log("l'erreur est :", err);
      }
    }
    return (
        <form className='signup' onSubmit={handleSubmit}>
        <div className='head'>SignUp Admin</div><br/>
            <label>Nom</label><br/>
            <input required placeholder='Entrer votre Nom' id="name" ref={nameInputRef}/><br/>
            <label>Prenom</label><br/>
 <input required placeholder='Entrer votre prénom' id="prenom" ref={prenomInputRef}/><br/>
            <label>Email</label><br/>
            <input required placeholder='Entrer un email' type="email" id="email"  ref={emailInputRef}/><br/>
            
            <label>Téléphone</label><br/>
            <input  required placeholder='Entrer votre numéro de téléphone' id="telephone" type="number" ref={telInputRef}/><br/>

            <label>Mot de passe</label><br/>
            <input  required placeholder='Entrer un mot de passe'  id="password" type="password" ref={passwordInputRef}/><br/>
            <label>Confirmer le mot de passe</label><br/>
            <input required placeholder='Confirmer le mot de passe'  id="passwordBix" type="password" ref={passwordBixInputRef}/><br/>
            <button className='valid'>S'inscrire</button>
            {redirect? <Redirect to="/dashboard" />: null}
           

        </form>

    )
}
export default InscriptionAdmin