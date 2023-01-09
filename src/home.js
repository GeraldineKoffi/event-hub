import React from "react";
import "./style.css"
import img from './mesImages/img.jpg'
import img1 from './mesImages/img1.jpg'
import img3 from './mesImages/img3.jpg'
import img4 from './mesImages/img4.jpg'



function Home(){
    return(
        <div className="slider">
            
           <div className="sliders">
            <div className="slide"><img src={img3} alt=""/></div> 
              <div className="slide"><img src={img1} alt=""/></div>  
              <div className="slide"><img src={img} alt=""/></div>  
              <div className="slide"><img src={img4} alt=""/></div>  
              </div>
            
            <div className="present">
              <h5>EventHub, un site pour la promotion des évènements. 
                <br/>Elle offre aux organisateurs d'évènements de pouvoir facilement <br/>
                faire connaitre leurs évènements au grand public </h5>
              </div>
        </div>
    )
}
export default Home