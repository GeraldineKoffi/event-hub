import axios from 'axios'
import React from 'react'
import utilisateur1 from './utilisateur1.png'

function profil(){
   const setUpdate = async(id,lastName, firstName,phone)=>{
   return(
      axios.patch(`http://localhost:4000/user/`+ id, {lastName, firstName,phone})
      .then((response)=>{
         if(response.data.access_token){
            localStorage.setItem("user", JSON.stringify(response.data));
         }
         return response.data;
      })
   )
   }
  

    const [show3, setShow3] = React.useState(false)
 
 function modif(){
    setShow3(!show3)
    
 }
 
    return(
      <div className='profil'>
        <img src={utilisateur1} alt='' className='imgProfil'/>  
        <input type="file" className='img' accept='image/*'/>
        <div className='info'>
        <p>{ localStorage.getItem('lastName')} { localStorage.getItem('firstName')}</p>

        <p>{ localStorage.getItem('mail')}</p>
        <p>{ localStorage.getItem('phone')}</p>
        </div>
        <button className='valid' onClick={modif}>Modifier</button>
       {show3? <div className='modifProfil'>
        <h3 >Modifier vos informations</h3>
        <div className='infoModif'>
        
         <input placeholder={ localStorage.getItem('id')} type="hidden"/><br/>
         <label>Nom</label><br/>
         <input placeholder={ localStorage.getItem('firstName')}/><br/>
         <label>Prénom</label><br/>
         <input placeholder={ localStorage.getItem('lastName')}/><br/>
        <label>Numéro</label><br/>
        <input placeholder={ localStorage.getItem('phone')}/><br/>
         <button className='valid' onClick={setUpdate}>Valider</button>
         </div>
      </div>:null}
      </div>
    )
}
export default profil