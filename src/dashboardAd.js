import React from "react";

import ProfilAD from './dashboard/profilAD'
import  './dashboard/style.css'
import UserBloquer from './dashboard/userBloquer'
import OrgBloquer from './dashboard/orgBloquer'
import EventDesact from './dashboard/eventDesact' 

function dashboardAd(){
    return(
        <div className="dashboard">
           <ProfilAD/>
           <UserBloquer/>
           <OrgBloquer/>
           
        </div>
    )

}
export default dashboardAd