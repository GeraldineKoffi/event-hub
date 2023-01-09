import React from "react";
import { Link } from "react-router-dom";
import user from './mesImages/user.jpg'
import Org from './mesImages/Org.jpg'

function Role(){
    return(
        <div className="role">
            
            <div className="user">
                <img src={user} className="userIcon" alt=""/>
                <Link to={'./inscription'}><button className="valid">Créer un compte utilisateur</button></Link>
            </div>
            <div className="org">
                <img src={Org} className="userIcon1" alt=""/>
            <Link to={'./inscriptionorg'}><button className="valid">Créer un compte organisateur</button></Link>
           </div>
        </div>
    )
}export default Role