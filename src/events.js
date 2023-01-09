import React, { useRef} from 'react'
import { Redirect } from "react-router-dom";
import './Events/style.css'
import axios from 'axios'

function Events(){
    const [redirect, setRedirect] = React.useState(false);
    const titreInputRef= useRef();
    const descriptInputRef= useRef();
    const dayInputRef=useRef();
    const statutInputRef=useRef();
    const priceInputRef=useRef();
    const actifInputRef=useRef(); 
   // const imgInputRef= useRef();

    const handleValidation=async(event)=>{
 
        event.preventDefault();
        const title= titreInputRef.current.value; 
        const description= descriptInputRef.current.value; 
        const date = dayInputRef.current.value;
        const statut= statutInputRef.current.value;
        const organisateurId=localStorage.getItem('id');
        const prix=priceInputRef.current.value;
        const actif=actifInputRef.current.value;
       // const Img = imgInputRef.current.value;
       
        try {
            await axios.post("http://localhost:4000/event",{
              title,
              description,
              date,
              statut,
              prix,
              actif,
              organisateurId
            })
           
           
          } catch (err) {
            console.log("l'erreur est :", err);
          }
          setRedirect(true)
          
        };
    
    return(

        <form className='events' onSubmit={handleValidation}>
         <h3 className='headEvent'>New Event</h3>
         <input placeholder={localStorage.getItem('id')} name='idorg' type="hidden"  /><br/>
         <label>Titre</label><br/>
         <input placeholder="Entrer le titre de l'évènement" name='titre' required ref={titreInputRef}/><br/>
         <label>Description</label><br/>
         <input placeholder='Décrivez votre évènement' required name='description' ref={descriptInputRef}/><br/>
         <label>Date</label><br/> 
         <input type="date" required name='day' ref={dayInputRef}/><br/>
         <label>Status</label>
         <select className='statut' name='statut' required ref={statutInputRef}>
            <option>Gratuit</option>
            <option>Payant</option>
         </select><br/>
         <label>Prix Ticket</label><br/>
         <input placeholder='Prix ticket' required name='prix' ref={priceInputRef} /><br/>
         <label>Nombre de ticket</label><br/>
        <input placeholder='nombre de ticket' required name='nbreticket'/><br/>
         <label>Ajouter une image</label><br/>
        <input type="file" className='file' name='img' /><br/>
        <label>Evènement actif</label>
        <select className='statut' name='statut' required ref={actifInputRef}>
            <option>Oui</option>
            <option>Non</option>
         </select><br/>
          <button className='valid'>Valider</button>
          {redirect? <Redirect to="/eventList"/>: null}
        </form>
    )
}
export default Events