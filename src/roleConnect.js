import React from "react";
import { Link } from "react-router-dom";
import user from './mesImages/user.jpg'
import Org from './mesImages/Org.jpg'

function Role1(){
    return(
        <div className="role">
            
            <div className="user">
                <img src={user} className="userIcon" alt=""/>
                <Link to={'./login'}><button className="valid">Connexion utilisateur</button></Link>
            </div>
            <div className="org">
                <img src={Org} className="userIcon1" alt=""/>
            <Link to={'./loginOrg'}><button className="valid"> Connexion organisateur</button></Link>
           </div>
        </div>
    )
}export default Role1