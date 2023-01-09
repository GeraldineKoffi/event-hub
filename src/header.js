import React from "react";
import {Link} from 'react-router-dom'
import menu from './mesImages/menu.png'


function Header(){
    const [show, setShow] = React.useState(false)
     
     function Menu(){
        setShow(!show)
     }

    return(
             <div className="header">
        <div className="logo"> E-venT Hub</div>
        <div className="menu" onClick={Menu}><img src={menu} alt="menu" width="55px" /></div>
         <div className="menuAll">
            
            <Link to={'./Role'}><button id="link">Inscription</button></Link><br/>
            <Link to={'/roleConnect'}><button id="link" >Connexion</button></Link><br/>
            <Link to={'./eventList'}><button id="link">Evènements</button></Link> 
        </div>
      {show? <div className="menuAl">
                
    <Link to={'./Role'}><button id="link">Inscription</button></Link><br/>
     <Link to={'/roleConnect'}><button id="link" >Connexion</button></Link><br/>
     <Link to={'./eventList'}><button id="link">Evènements</button></Link> 
 </div>:null}
        
        </div>
    )
}
export default Header;