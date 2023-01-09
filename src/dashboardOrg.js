import React, {useState} from "react";
import {Link} from 'react-router-dom'
import ProfilOrg from './dashboard/profilOrg'
import  './dashboard/style.css'


function dashboardOrg(){
    const [loggedIn,setLoggedIn]= useState(false);
    const logout=()=>{
        localStorage.removeItem('access_token')
        setLoggedIn(true)
    }
    return(
        <div className="dashboard">
             <Link to={'./'}><button className="deconnect" onClickCapture={logout}>Déconnexion</button></Link> 
             <Link to={'./inscritEvent'}><button className="event2">Personnes inscrits à votre évènements</button></Link>   
             <Link to={'./eventGest'}><button className="event">Gérer vos evènements</button></Link> 
             <Link to={'./events'}><button className="event3">Créer un nouvel évènement</button></Link> 
             <Link to={'./'}><button className="event4">Modifier un évènement</button></Link> 

           <ProfilOrg/>
        </div>
    )

}
export default dashboardOrg