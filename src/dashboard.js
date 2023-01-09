import React ,{useState} from "react";
import {Link} from 'react-router-dom'
import Interest from './dashboard/interest'
import Profil from './dashboard/profil'
import  './dashboard/style.css'

function dashboard(){
    const [loggedIn,setLoggedIn]= useState(false);

    const logout=()=>{
        localStorage.removeItem('access_token')
        setLoggedIn(true)
    }

    return(
        <div className="dashboard">
             <Link to={'./'}><button className="deconnect" onClick={logout}>Déconnexion</button></Link> 
         <Link to={'./'}><button className="event">Consulter les évènements à venir</button></Link> 
           <Profil/>
           <Interest/>
        </div>
    )

}
export default dashboard