import React from 'react'
import utilisateur1 from './utilisateur1.png'

function profilOrg(){
  

    const [show3, setShow3] = React.useState(false)
 
 function modif(){
    setShow3(!show3)
    
 }
 
    return(
      <div className='profilOrg'>
        <img src={utilisateur1} alt='' className='imgProfil'/>  
        <input type="file" className='img' accept='image/*'/>
        <div className='info'>
        <p>{ localStorage.getItem('name')}</p>
        <p>{ localStorage.getItem('email')}</p>
        <p>{ localStorage.getItem('tel')}</p>
        <p>{ localStorage.getItem('adresse')}</p>
        <p>{ localStorage.getItem('gerant')}</p>
        <p>{ localStorage.getItem('num_RCS')}</p>
        </div>
        <button className='valid' onClick={modif}>Modifier</button>
       {show3? <div className='modifProfil'>
        <h3 >Modifier vos informations</h3>
        <div className='infoModif'>
         <input placeholder={ localStorage.getItem('id')} type="hidden"/><br/>
         <label>Nom Entreprise</label><br/>
         <input placeholder={ localStorage.getItem('name')}/><br/>
         <label>Email</label><br/>
         <input placeholder={ localStorage.getItem('mail')}/><br/>
        <label>Numéro</label><br/>
        <input placeholder={ localStorage.getItem('tel')}/><br/>
         <label>Adresse</label><br/>
         <input placeholder={ localStorage.getItem('adresse')}/><br/>
         <label>gerant</label><br/>
         <input placeholder={localStorage.getItem('gerant')}/><br/>
         <button className='valid'>Valider</button>
         </div>
      </div>:null}
      </div>
    )
}
export default profilOrg