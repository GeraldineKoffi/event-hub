import React, { useState,useRef } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import validation from './validation'

function InscriptionOrg(){
    const [redirect, setRedirect] = React.useState(false)
    const nameInputRef= useRef();
    const nameInputRefError= useRef();
    const adressInputRef=useRef();
    const adressInputRefError= useRef();
    const emailInputRef= useRef();
    const emailInputRefError= useRef();
    const telInputRef= useRef();
    const telInputRefError= useRef();
    const passwordInputRef= useRef();
    const passwordInputRefError= useRef();
    const passwordBixInputRef= useRef();
    const passwordBixInputRefError= useRef();
    const gerantInputRef=useRef();
    const gerantInputRefError=useRef();
    const numRcsInputRef=useRef();
    const numRcsInputRefError=useRef()
 
    

const handleSubmit= async(event)=>{
    event.preventDefault()
    const name= nameInputRef.current.value;
    const mail= emailInputRef.current.value; 
    const pass= passwordInputRef.current.value;
    const tel= telInputRef.current.value; 
    const adresse= adressInputRef.current.value; 
    const gerant= gerantInputRef.current.value;
    const num_RCS= numRcsInputRef.current.value;


    if(!name){
      nameInputRefError.current.innerHTML="Ce champs est requis!"
    }
    if(!adresse){
      adressInputRefError.current.innerHTML="Ce champs est requis!"
    }
    if(!gerant){
      gerantInputRefError.current.innerHTML="Ce champs est requis!"
    }

    if(!mail){
      emailInputRefError.current.innerHTML="Ce champs est requis!"
      
    }
    if(!tel){
      telInputRefError.current.innerHTML="Ce champs est requis!"
      
    }
    if(!pass){
      passwordInputRefError.current.innerHTML="Ce champs est requis!"
     
    }
    if(!passwordBixInputRef){
      passwordBixInputRefError.current.innerHTML="Ce champs est requis!"
    }
    if(pass!= passwordBixInputRef){
      passwordBixInputRefError.current.innerHTML="Le mot de passe est différent du premier"
      return
    }

    try {
        await axios.post("http://localhost:4000/organisateur", {
          name,
          mail,
          pass,
          tel,
          adresse,
          gerant,
          num_RCS
         
        })
        .then(response=>{

          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('name', response.data.organisateur.name)
          localStorage.setItem('mail', response.data.organisateur.mail)
          localStorage.setItem('tel', response.data.organisateur.tel)
          localStorage.setItem('adresse', response.data.organisateur.adresse)
          localStorage.setItem('id', response.data.organisateur.id)
          localStorage.setItem('gerant', response.data.organisateur.gerant)
          localStorage.setItem('num_RCS', response.data.organisateur.num_RCS)
          setRedirect(true)
        }
         )
      } catch (err) {
        console.log("l'erreur est :", err);
      }
      
        }
    
    

    return (
        <form className='signup' onSubmit={handleSubmit}>
        <div className='head'>SignUp Organisateur</div><br/>
            <label>Nom Entreprise </label><br/>
            <input  placeholder='Entrer votre Nom ' id="name" ref={nameInputRef}/><br/>
            <div className='error' ref={nameInputRefError}  style={{ color:"red"}}/>

            <label>Email</label><br/>
            <input  placeholder='Entrer un email' type="email" id="email"  ref={emailInputRef}/><br/>
            <div className='error' ref={emailInputRefError}  style={{ color:"red"}}/>

            <label>Téléphone</label><br/>
            <input   placeholder='Entrer votre numéro de téléphone' id="telephone" ref={telInputRef}/><br/>
            <div className='error' ref={telInputRefError}  style={{ color:"red"}}/>

            <label>Adresse</label><br/>
            <input  placeholder='Entrer une adresse' id="adress" ref={adressInputRef} /><br/>
            <div className='error' ref={adressInputRefError}  style={{ color:"red"}}/>

            <label>Gerant</label><br/>
            <input  placeholder='Nom gerant' id='gerant' ref={gerantInputRef}/><br/>
            <div className='error' ref={gerantInputRefError}  style={{ color:"red"}}/>

            <label>Numéro RCS</label><br/>
            <input placeholder='Entrer votre numéro RCS' id='num_RCS' ref={numRcsInputRef}/><br/>
            <div className='error' ref={numRcsInputRefError}  style={{ color:"red"}}/>

            <label>Mot de passe</label><br/>
            <input  placeholder='Entrer un mot de passe'  id="password" type="password" ref={passwordInputRef}/><br/>
            <div className='error' ref={passwordInputRefError}  style={{ color:"red"}}/>

            <label>Confirmer le mot de passe</label><br/>
            <input  placeholder='Confirmer le mot de passe'  id="passwordBix" type="password" ref={passwordBixInputRef}/><br/>
            <div className='error' ref={passwordBixInputRefError}  style={{ color:"red"}}/>
           <button className='valid'>S'inscrire</button>
            {redirect? <Redirect to="/dashboardOrg" />: null}
           

        </form>

    )
}
export default InscriptionOrg